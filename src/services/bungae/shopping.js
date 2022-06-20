import axios from "axios";
import * as cheerio from 'cheerio';
// import * as puppeteer from "puppeteer";

function getBungaeConfig(sendCookies = false) {
  const axiosConfig = {
    baseURL: `${process.env.REACT_APP_BUNGAE_BASE_URL}`,
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
    },
    withCredentials: sendCookies,
  };
  return axiosConfig;
}

function getBungae(url, config) {
  return axios.get(url, {...getBungaeConfig(), ...config});
}

async function bungaeShoppingApi(query) {


  // const browser = await puppeteer.launch();
  // const page = await browser.newPage();
  // const url = 'https://m.bunjang.co.kr/search/products?q=' + query;
  // await page.goto(url);
  // const pageData = await page.evaluate(()=> {
  //   return {
  //     html: document.documentElement.innerHTML,
  //   };
  // });
  // const $ = cheerio.load(pageData.html);
  // await browser.close();
  // let products = $('div.sc-Eieub').attr('class');
  // console.log(products);
  // products.each((index, element) => {

  // });

}

export {bungaeShoppingApi}
