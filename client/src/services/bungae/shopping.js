import axios from "axios";
// import * as cheerio from 'cheerio';

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
  const addon = "?q=" + query;
  const res = await getBungae(addon);
  return res;
  // const $ = cheerio.load(res);
  // return cheerio.html($('.sc-jKVCRD bqiLXa'));
}

export {bungaeShoppingApi}
