var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.sendFile('index.html', {root: __dirname }); // load the single view index.html main page
});

app.listen(8080);
console.log("App listening on port 8080");
