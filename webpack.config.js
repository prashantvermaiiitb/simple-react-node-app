/**
 * This is the minimal configurations that needed by the Webpack 4.0
 * By default it's entry point is src/index.js
 * By default the output is dist/main.js
 * @todo : Now question arises how to change it :)
 */
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
