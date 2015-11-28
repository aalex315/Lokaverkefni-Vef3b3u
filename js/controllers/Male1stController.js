app.controller('Male1stController', function($scope, $http){
	$http({
		method: 'GET',
		url: 'http://apis.is/sports/football/male-leagues/1st'
	}).then(function successCallback(responce){
		$scope.matches = responce.data.results;
	}, function errorCallback(responce){
		console.log(responce);
	});
});