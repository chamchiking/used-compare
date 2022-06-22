import axios from "axios";

function getNaverConfig(sendCookies = false) {
  const axiosConfig = {
    baseURL: "https://used-compare.herokuapp.com/naver",
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

function getNaver(url, config) {
  return axios.get(url, { ...getNaverConfig(), ...config });
}

async function naverShoppingApi(query) {
  
  const addon = "?query=" + query;
  const res = await getNaver(addon);
  return res.data;
}

export { naverShoppingApi };
