var app = angular.module("football", ["ngRoute"]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'templates/index.html',
        controller: 'IndexController'
      }).
      when('/MalePepsi', {
      	templateUrl: 'templates/leagues.html',
      	controller: 'MalePepsiController'
      }).
      when('/Male1st', {
        templateUrl: 'templates/leagues.html',
        controller: 'Male1stController'
      }).
      when('/FemalePepsi', {
        templateUrl: 'templates/leagues.html',
        controller: 'FemalePepsiController'
      }).
      when('/FemaleBorgun', {
        templateUrl: 'templates/leagues.html',
        controller: 'FemaleBorgunController'
      });
  }
]);