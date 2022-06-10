import axios from "axios";

function getConfig(sendCookies = false) {
  const axiosConfig = {
    baseURL: `${process.env.REACT_APP_NAVER_SHOPPING_BASE_URL}`,
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
      "X-Naver-Client-Id": `${process.env.REACT_APP_NAVER_CLIENT_ID}`,
      "X-Naver-Client-Secret": `${process.env.REACT_APP_NAVER_CLIENT_SECRET}`,
    },
    withCredentials: sendCookies,
  };

  return axiosConfig;
}

function get(url, config) {
  return axios.get(url, { ...getConfig(), ...config });
}

async function naverShoppingApi(query) {
  const addon = "shop.json?query=" + query;
  const res = await get(addon);
  return res.data;
}

export { naverShoppingApi };
