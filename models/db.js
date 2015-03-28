var mongoose = require('mongoose');
var dotenv = require('dotenv');
dotenv.load();

// set db configuration using environment variables
var mongodbName = process.env.DB_NAME;
var mongodbUser = process.env.DB_USER;
var mongodbPass = process.env.DB_PASS;
var mongodbUri = process.env.DB_URI;
	mongodbUri = "mongodb://"+ mongodbUser + ":" + mongodbPass + "@" + mongodbUri;
var mongodbOptions = { 
    server:  { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }, 
    replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }
};

mongoose.connect(mongodbUri, mongodbOptions);
// When successfully connected 
mongoose.connection.on('connected', function () {
  console.log('Mongoose connection open to ' + mongodbName);
});
// If the connection throws an error 
mongoose.connection.on('error',function (err) { 
  console.log('Mongoose connection error: ' + err);
});
// When the connection is disconnected 
mongoose.connection.on('disconnected', function () { 
  console.log('Mongoose connection disconnected'); 
});
// If the Node process ends, close the Mongoose connection 
process.on('SIGINT', function() {  
  mongoose.connection.close(function () { 
    console.log('Mongoose connection disconnected through app termination'); 
    process.exit(0); 
  }); 
});

//