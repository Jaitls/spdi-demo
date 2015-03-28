var express = require('express');
var mongoose = require('mongoose');
var load = require('express-load');
var fs = require('fs');
var app = express();

//set all static directories and middleware
app.use('/dist', express.static(__dirname + '/dist'));

//set main route
app.get('/', function(req, res, next) {
  res.sendFile('views/index.html', {
    root: __dirname
  });
});

//load all models and server routes
load('models/db.js')
  .then('models')
  .then('routes')
  .into(app);


app.listen(8086);
console.log("App listening on port 8086 \nhttp://localhost:8086");

/**
 * Add error handling
 */
/*app.get('*', function(req, res, next) {
  var err = new Error();
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  if(err.status !== 404) {
    return next();
  }
 
  res.status(404);
  res.send(err.message || '** no unicorns here **');
});*/