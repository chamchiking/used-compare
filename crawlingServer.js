const express = require("express");
var cors = require('cors');

const app = express();

app.use(cors());
const port = process.env.PORT || 3001;
app.listen(port);

app.use("/crawling/data", async function (req, res) {
  console.log("검색 키워드: " + req.query.keyword);
  const resultList = await openBrowser(req.query.keyword);
  res.json(resultList);
});
app.get('*', (req, res)=> {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
})

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
      "--window-size=1600, 2000",
    ]
  });

  const page = await browser.newPage();

  await page.goto(url, {waitUntil: 'networkidle0'});
  await page.content();


  page.on('console', async (msg) => {
    const msgArgs = msg.args();
    for (let i = 0; i < msgArgs.length; ++i) {
      console.log(await msgArgs[i].jsonValue());
    }
  });
  const selector = '#root > div > div > div:nth-child(4) > div > div:nth-child(4) > div'
  const sample = await page.$(selector);



  const searchData = await page.evaluate(() => {
    const contentsList = Array.from(document.querySelectorAll("div.sc-cooIXK.eRiVOY"));
    const imageList = Array.from(document.querySelectorAll("img[alt='상품 이미지']"));
    // console.log(contentsList.length, imageList.length);
    let contentsObjList = [];

    contentsList.forEach((item, i) => {
      const eachItem = Array.from(item.querySelectorAll("div"));
      var title = '';
      var price = 0;
      var date = '';
      var whetherAD = false;
      
      eachItem.forEach((info) => {
        // console.log("info:  "+info.className+"  "+info.textContent)
        if (info.className === "sc-fcdeBU iVCsji"){
          title = info.textContent;
        }else if(info.className === "sc-gmeYpB iBMbn"){
          price = info.textContent;
        }else if(info.className === "sc-iSDuPN iJqnGY"){
          date = info.textContent;
          if (date === 'AD'){
            whetherAD = true;
          }
        }
      })
      
      if (!whetherAD && imageList[i]){
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