const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = env => {
  const isProduction = env.NODE_ENV === 'production';
  return {
    mode: 'none',
    entry: './src/app.js',
    output: {
      path: path.resolve(__dirname, 'public'),
      filename: 'bundle.js'
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

        {
          test: /\.css$/,
          use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
        },
      ]
    }
  };
}
