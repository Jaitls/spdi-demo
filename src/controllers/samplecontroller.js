myApp
	.controller('SampleController', ['$scope', '$http', function($scope, $http) {
		$http.get('/contactlist').success(function(response) {
			console.log("I got the data I requested");
			$scope.contactlist = response;
		});

	}]);