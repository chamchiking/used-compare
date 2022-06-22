const express = require("express");
var cors = require("cors");

const app = express();

app.use(cors());
const port = process.env.PORT || 3001;
app.listen(port);

app.use("/naver", async function (req, res) {
  var api_url = 'https://openapi.naver.com/v1/search/shop.json?query=' + encodeURI(req.query.query); // json 결과
   var request = require('request');
   var options = {
       url: api_url,
       headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
    };
   request.get(options, function (error, response, body) {
     if (!error && response.statusCode == 200) {
       res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
       res.end(body);
     } else {
       res.status(response.statusCode).end();
       console.log('error = ' + response.statusCode);
     }
   });
})

app.use("/crawling/data", async function (req, res) {
  console.log("검색 키워드: " + req.query.keyword);
  const resultList = await openBrowser(req.query.keyword);
  res.json(resultList);
});
// path 모듈 불러오기
const path = require('path');

// 리액트 정적 파일 제공
app.use(express.static(path.join(__dirname, 'client/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});
console.log(`************* server running at http ${port}`);
const puppeteer = require("puppeteer");

/**
 * 브라우저 오픈 함수
 * @param {string} keyword
 * @return {array} 검색 결과
 */
async function openBrowser(keyword) {
  const url = `https://m.bunjang.co.kr/search/products?q=${keyword}`;
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--window-size=1600,2000",
    ]
  });

  const page = await browser.newPage();

  await page.goto(url, { waitUntil: "networkidle0" });
  await page.content();

  page.on("console", async (msg) => {
    const msgArgs = msg.args();
    for (let i = 0; i < msgArgs.length; ++i) {
      console.log(await msgArgs[i].jsonValue());
    }
  });
  const selector =
    "#root > div > div > div:nth-child(4) > div > div:nth-child(4) > div";
  const sample = await page.$(selector);

  const searchData = await page.evaluate(() => {
    const contentsList = Array.from(
      document.querySelectorAll("div.sc-cooIXK.eRiVOY")
    );
    const imageList = Array.from(
      document.querySelectorAll("img[alt='상품 이미지']")
    );
    // console.log(contentsList.length, imageList.length);
    let contentsObjList = [];

    contentsList.forEach((item, i) => {
      const eachItem = Array.from(item.querySelectorAll("div"));
      var title = "";
      var price = 0;
      var date = "";
      var whetherAD = false;

      eachItem.forEach((info) => {
        // console.log("info:  "+info.className+"  "+info.textContent)
        if (info.className === "sc-fcdeBU iVCsji") {
          title = info.textContent;
        } else if (info.className === "sc-gmeYpB iBMbn") {
          price = info.textContent;
        } else if (info.className === "sc-iSDuPN iJqnGY") {
          date = info.textContent;
          if (date === "AD") {
            whetherAD = true;
          }
        }
      });

      if (!whetherAD && imageList[i]) {
        contentsObjList.push({
          title: title, // 타이틀
          date: date,
          price: price, // 내용
          image: imageList[i].src,
        });
      }
    });

    console.log("Done.....");
    return contentsObjList;
  });
  await browser.close();

  return searchData;
}
