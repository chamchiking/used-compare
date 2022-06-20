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
    createProxyMiddleware("/api/data", {
        target: "http://localhost:5000",
        changeOrigin: true,
    })
  );
};
