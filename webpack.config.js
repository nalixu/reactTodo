const path = require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
// const CleanWebpackPlugin=require('clean-webpack-plugin');
const ExtractTextPlugin=require('extract-text-webpack-plugin');
const webpack=require('webpack');
module.exports = {
    mode:'development',
    entry:{
        // main: ["babel-polyfill", './src/index.jsx']
        app:'./src/index.jsx'
      },
  devtool:'inline-source-map',
  devServer:{
      contentBase:'./dist',
      hot:true
  },
  plugins:[
    // new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
        title:'output management',
        template:'./index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin({
        filename:'style.css'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    // loaders: [
    //     { test: /\.js|jsx$/, loaders: ['babel'] },
        
    // ],
      rules:[
        {
            test: /\.js|jsx$/,
            loader:'babel-loader'
        },
          {
              test:/\.css$/,
              use:[
                  'style-loader',
                  'css-loader'
              ]
          },
          {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: [
                {
                    loader: 'css-loader',
                    options: {
                        // If you are having trouble with urls not resolving add this setting.
                        // See https://github.com/webpack-contrib/css-loader#url
                        url: false,
                        minimize: true,
                        sourceMap: true
                    }
                }, 
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true
                    }
                }
              ]
            })
          },
          {
              test:/\.(png|svg|jpg|gif)$/,
              use:[
                  'file-loader'
              ]
          }
      ]
     },
     resolve:{
        modules: [
            "node_modules",
            path.resolve(__dirname, 'dist')
          ],
          extensions: [".js", ".json", ".jsx", ".css"]
     }
};