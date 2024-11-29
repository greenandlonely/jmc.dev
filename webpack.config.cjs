const path = require("path");

module.exports = {
  entry: ["./js/viewport-height.js", "./js/aos.js"],
  output: {
    path: path.resolve(__dirname, "js"),
    filename: "bundle.js",
  },
};