var mongoose = require('mongoose');

module.exports = function(app) {
	app.use('/api/users', function(req, res, next) {
		// req.path will be the req.url with the /api/users prefix stripped
		console.log('%s', req.path);
		next();
	});

	app.get('/api/users', function(req, res, next) {
		mongoose.model('Things').find(function(err, users) {
			res.send(users);
		});
	});
};