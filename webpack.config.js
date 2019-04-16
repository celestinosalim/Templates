var path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/Template.js",
  output: {
    path: path.resolve("lib"),
    filename: "Template.js",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: "babel-loader"
      }
    ]
  }
};
