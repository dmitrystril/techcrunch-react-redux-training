const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../../webpack.config.babel').default;
const express = require('express');
const path = require('path');

const app = express();

const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {noinfo: true, publicPath: webpackConfig.output.publicPath}));
app.use(webpackHotMiddleware(compiler));
app.use(express.static(webpackConfig.output.publicPath));

app.get('*', function (request, response){
    response.sendFile(path.resolve('./', 'public', 'index.html'))
});

const port = 3000;
app.listen(port, function(error) {
	if (error) {
		return console.log(error);
	}
	console.log("Express server listening on port", port);
});
