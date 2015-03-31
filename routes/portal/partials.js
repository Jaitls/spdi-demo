module.exports = function(app) {
	app.get('/partials/:name', function(req, res, next) {
		var name = req.params.name;
		if (name.split('.').pop() !== 'html') name = name + '.html';
		res.sendFile('/views/partials/' + name, {
			root: './'
		});
	});
};