const Config = require("webpack-config");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

export default new Config().merge({
  entry: [
  'whatwg-fetch',
    './src/client/Client.jsx'
  ],
  output: {
    filename: 'bundle.min.js',
    path: __dirname + '/public',
    publicPath: '/'
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      loader: 'babel-loader',
      exclude: [/node_modules/, /public/]
    }, {
      test: /\.(woff|ico|png)$/,
      loader: 'file-loader?name=[name].[ext]'
    },
    {
  	  test: /\.css$/,
  	  loader: ExtractTextPlugin.extract({
  		fallback: 'style-loader',
  		use: {
  		  loader: 'css-loader',
  		  query: {
  			minimize: true,
  			modules: true,
  			localIdentName: '[name]__[local]___[hash:base64:5]'
  		  }
  	    }
  	  })		
  	}]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/client/index.html',
      inject: "body"
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true
      }
    }),
    new ExtractTextPlugin("bundle.css")
  ]
});
