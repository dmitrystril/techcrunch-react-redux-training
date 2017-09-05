import webpack from 'webpack'
import Config from 'webpack-config'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

export default new Config().extend('webpack_config/webpack.base.config.js').merge({
  entry: [
    'whatwg-fetch',
    __dirname + '/../src/client/Client.jsx'
  ],
  output: {
    filename: 'bundle.min.js'
  },
  module: {
  	loaders: [{
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
  	}]},
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true
      }
    }),
    new ExtractTextPlugin("bundle.css")]
});
