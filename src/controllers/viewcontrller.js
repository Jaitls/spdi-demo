myApp
	.config(function($routeProvider) {
		$routeProvider
			.when('/test',{
				templateUrl:'partials/test',
				controller:'LinkController'
			});
	});

myApp.controller('LinkController', function ($scope) {
   $scope.message = "LINK";
});