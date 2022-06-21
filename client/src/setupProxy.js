const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "https://openapi.naver.com",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
    }),
    createProxyMiddleware("/bungaeapi", {
      target: "https://m.bunjang.co.kr",
      changeOrigin: true,
      pathRewrite: {
        "^/bungaeapi": "",
      }
    }),
  );
};
