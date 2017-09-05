import webpack from 'webpack'
import Config from 'webpack-config'
import combineLoaders from 'webpack-combine-loaders'

new Config().extend('webpack_config/webpack.base.config.js').merge({
  devtool: 'inline-source-map',
  entry: [
    'webpack-hot-middleware/client',
    'whatwg-fetch',
    __dirname + '/../src/client/Client.jsx'
  ],
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: combineLoaders([{
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]'
        }
      }])
    }]},
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});

