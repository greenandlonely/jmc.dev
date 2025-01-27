const path = require("path");

module.exports = {
  entry: ["./js/viewport-height.js"],
  output: {
    path: path.resolve(__dirname, "js"),
    filename: "output/bundle.js",
  },
};
