const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./app/index.ts",
  mode: "development",
  devServer: {
    watchFiles: ["app/**/*", "public/**/*"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "public/index.html", to: "index.html" },
        { from: "public/assets/", to: "assets" },
      ],
    }),
  ],
};
