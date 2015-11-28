app.controller('FemalePepsiController', function($scope, $http){
	$http({
		method: 'GET',
		url: 'http://apis.is/sports/football/female-leagues/pepsi/'
	}).then(function successCallback(responce){
		$scope.matches = responce.data.results;
	}, function errorCallback(responce){
		console.log(responce);
	});
});