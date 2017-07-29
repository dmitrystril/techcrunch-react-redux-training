var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var webpackConfig = require('../../webpack.config.babel').default;
var express = require('express');
var path = require('path');

var app = express();

var compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {noinfo: true, publicPath: webpackConfig.output.publicPath}));
app.use(webpackHotMiddleware(compiler));
app.use(express.static(webpackConfig.output.publicPath));

app.get('*', function (request, response){
    response.sendFile(path.resolve('./', 'public', 'index.html'))
})

var port = 80;
app.listen(port, function(error) {
	if (error) {
		return console.log(error);
	}
	console.log("Express server listening on port", port);
});

