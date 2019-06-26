const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => {
  const isProduction = env.NODE_ENV === 'production';
  return {
    mode: env.NODE_ENV,
    entry: './src/app.js',
    output: {
      path: path.resolve(__dirname, 'public'),
      filename: '[name].[hashname].js'
    },

    devtool: isProduction ? false : 'source-map',

    devServer: {
      contentBase: './public',
    },

    optimization: {
      minimize: isProduction,
      minimizer: [new TerserPlugin()],
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-transform-runtime']
            }
          }
        },
      ]
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html'
      }),
      ]
  };
}
