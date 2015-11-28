app.controller('FemaleBorgunController', function($scope, $http){
	$http({
		method: 'GET',
		url: 'http://apis.is/sports/football/female-leagues/borgun/'
	}).then(function successCallback(responce){
		$scope.matches = responce.data.results;
	}, function errorCallback(responce){
		console.log(responce);
	});
});