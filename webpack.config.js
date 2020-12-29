'use strict'

const path = require('path')

const { EnvironmentPlugin } = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env, { mode }) => {
  const isProduction = mode === 'production'
  const assetName = `assets/[name]${isProduction ? '.[contenthash]' : ''}`
  const basename = process.env.PUBLIC_URL || ''

  return {
    entry: './src/index.js',
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: ''
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          include: [
            path.resolve(__dirname, 'src')
          ],
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.(ico|jpg|png|eot|svg|ttf|woff|woff2|gif)$/,
          exclude: [
            path.resolve(__dirname, 'photos')
          ],
          use: [
            {
              loader: 'file-loader',
              options: {
                name: `${assetName}.[ext]`
              }
            }
          ]
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: '../'
              }
            },
            {
              loader: 'css-loader'
            },
            { loader: 'sass-loader' }
          ]
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin({}),
      new MiniCssExtractPlugin({
        filename: `${assetName}.css`
      }),
      new HtmlWebPackPlugin({
        template: './public/index.html',
        filename: './index.html',
        base: `${basename}/}`,
        minify: {
          collapseWhitespace: true
        }
      }),
      new CompressionPlugin({
        test: /\.(js|css|html)$/,
        cache: true
      }),
      new EnvironmentPlugin({
        DEBUG: false
      })
    ],
    resolve: {
      extensions: ['.js'],
      mainFiles: ['index'],
      alias: {
        react: path.resolve('./node_modules/react'), // local dependency overwrite React
        assets: path.join(__dirname, 'assets/'),
        src: path.join(__dirname, 'src/'),
        photos: path.join(__dirname, 'photos/')
      }
    },
    devServer: {
      port: 8080,
      historyApiFallback: true
    }
  }
}
