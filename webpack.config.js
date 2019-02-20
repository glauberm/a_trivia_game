const path = require('path');
const dirname = path.resolve(path.dirname(''));
const postcssPresetEnv = require('postcss-preset-env');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  'mode': 'development',
  'entry': [
    'babel-polyfill',
    'whatwg-fetch',
    './src/index.js'
  ],
  'output': {
    'path': path.resolve(dirname, 'build'),
    'filename': '[name].[chunkhash:8].js',
  },
  devServer: {
    contentBase: path.resolve(dirname, 'build')
  },
  'module': {
    'rules': [
      {
        'enforce': 'pre',
        'test': /\.js$/,
        'exclude': /node_modules/,
        'use': 'eslint-loader'
      },
      {
        'test': /\.js$/,
        'exclude': /node_modules/,
        'use': {
          'loader': 'babel-loader',
          'options': {
            'presets': [
              'env'
            ]
          }
        }
      },
      {
        'test': /\.(css|scss)$/,
        'use': [
          'style-loader',
          {
            loader: 'css-loader', options: {
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader', options: {
              ident: 'postcss',
              plugins: (loader) => [
                require('postcss-import')({ root: loader.resourcePath }),
                require('cssnano')(),
                postcssPresetEnv(),
              ]
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|ico)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
    ]
  },
  'plugins': [
    new CleanWebpackPlugin(
      ['build']
    ),
    new MiniCssExtractPlugin({
      'filename': '[name].[chunkhash:8].css',
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      inject: 'head',
      minify: {
        collapseWhitespace: true
      },
    }),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      proxy: 'http://localhost:8080/'
    })
  ]
};