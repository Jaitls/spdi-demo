var myApp = angular.module('myApp', []);
myApp.controller('SampleController', ['$scope', function($scope) {
    $scope.sample = "Hola!";
}]);							