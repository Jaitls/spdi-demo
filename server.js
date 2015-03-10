var express = require('express');
var compress = require('compression');
var app = express();

app.use(compress());

app.get('/', function(req, res) {
	res.sendFile('views/index.html', {root: __dirname}); // load the single view index.html main page
});

app.use('/dist', express.static(__dirname + '/dist'));

app.listen(8080);
console.log("App listening on port 8080");
