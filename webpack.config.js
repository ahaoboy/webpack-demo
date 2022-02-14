const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: "./dist",
    historyApiFallback: true,
    port: 3000,        //Port Number
    host: 'localhost', //Change to '0.0.0.0' for external facing server
    proxy: {
      "^/api": {
        target: "http://127.0.0.1:3001",
        rewrite: function (req) {
          console.log("aaa", req.url);
          req.url = req.url.replace(/^\/api/, "");
        },
      },
    },
  },
};
