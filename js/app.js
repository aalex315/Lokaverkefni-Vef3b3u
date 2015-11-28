var app = angular.module("football", ["ngRoute"]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'templates/index.html',
        controller: 'IndexController'
      }).
      when('/MalePepsi', {
      	templateUrl: 'templates/male-pepsi.html',
      	controller: 'MalePepsiController'
      });
  }
]);