app.controller('IndexController', function($scope, $http){
	$http({
		method: 'GET',
		url: 'http://apis.is/sports/football/male-leagues/pepsi'
	}).then(function successCallback(responce){
		$scope.matches = responce.data.results;
		console.log(responce);
	}, function errorCallback(responce){
		console.log(responce);
	});
});