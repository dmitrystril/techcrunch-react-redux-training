var express = require('express');
var path = require('path');

var app = express();
app.use(express.static('./public'))

app.get('*', function (request, response){
    response.sendFile(path.resolve('./', 'public', 'index.html'))
})

var port = process.env.PORT || 3000;
app.listen(port, function(error) {
	if (error) {
		return console.log(error);
	}
	console.log("Express server listening on port", port);
});
