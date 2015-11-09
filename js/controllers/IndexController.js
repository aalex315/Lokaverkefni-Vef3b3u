app.controller('IndexController', function($scope, $http){
	$http({
		method: 'GET',
		url: 'http://apis.is/sports/football/male-leagues/pepsi'
	}).then(function successCallback(responce){
		$scope.soccer = responce.data;
		console.log(responce);
	}, function errorCallback(responce){
		console.log(responce);
	});
});