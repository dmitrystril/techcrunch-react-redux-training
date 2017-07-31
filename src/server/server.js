var webpackConfig = require('../../webpack.config.babel');
var express = require('express');
var path = require('path');

var app = express();
app.use(express.static('./public'))

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
