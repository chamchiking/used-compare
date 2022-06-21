const express = require("express");

const app = express();

const port = process.env.PORT || 5000;
app.listen(port);

app.use("/api/data/", async function (req, res) {
  console.log("검색 키워드: " + req.query.keyword);
  const resultList = await openBrowser(req.query.keyword);
  console.log(resultList);
  res.json(resultList);
});

console.log(`************* server running at http ${port}`);
const puppeteer = require("puppeteer");


/**
 * 브라우저 오픈 함수
 * @param {string} keyword
 * @return {array} 검색 결과
 */
async function openBrowser(keyword) {
  
  const browser = await puppeteer.launch({ headless: true });

  const page = await browser.newPage();

  await page.goto(`https://m.bunjang.co.kr/search/products?q=${keyword}`, {waitUntil: 'networkidle0'});
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
    console.log('\n--\n');
    const contentsList = Array.from(document.querySelectorAll("div.sc-cooIXK.eRiVOY"));
    let contentsObjList = [];

    contentsList.forEach((item) => {
      const eachItem = Array.from(item.querySelectorAll("div"));
      var title = '';
      var price = 0;
      var date = '';
      var whetherAD = false;
      
      eachItem.forEach((info) => {
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
      if (!whetherAD){
        contentsObjList.push({
          title: title, // 타이틀
          date: date,
          price: price, // 내용
        });
      }
    });

    console.log("Done.....");
    return contentsObjList;
  });
  await browser.close();

  return searchData;
}