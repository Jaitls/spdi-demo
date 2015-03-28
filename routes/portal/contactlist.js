module.exports = function(app) {
	app.get('/contactlist', function (req, res, next) {
		console.log("I received a GET request");
		person1 = {
			name: 'Tim',
			email: 'Tim@aol.com',
			number: '(555)-555-5555'

		};

		person2 = {
			name: 'Jane',
			email: 'Jane@aol.com',
			number: '(888)-888-8888'

		};

		person3 = {
			name: 'John',
			email: 'John@aol.com',
			number: '(123)-456-7890'

		};
		var contactlist = [person1, person2, person3];
		res.json(contactlist);
	});
};