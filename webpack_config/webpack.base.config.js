import Config from 'webpack-config';
import HtmlWebpackPlugin from 'html-webpack-plugin'

new Config().merge({
  entry: './src/client/Client.jsx',
  output: {
    path: __dirname + '/../public',
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
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/client/index.html',
      inject: "body"
    })
  ]
});
