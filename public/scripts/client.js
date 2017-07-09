// Creating the angular module that will act as our entire application
//add ngRoute module dependency for additional pages
// var myApp = angular.module('myApp', ['ngRoute']);
var myApp = angular.module('myApp', ['ngRoute', 'ui.bootstrap']);

// Angular configuration, $routeProvider is small part of ngRoute, allows us to do client-side navigation
myApp.config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'views/pages/home.html',
    })
    .when('/profile', {
      templateUrl: 'views/pages/profile.html',
      controller: 'GithubProfileController as gpc'
    })
    .when('/repos', {
      templateUrl: 'views/pages/repos.html',
      controller: 'GithubReposController as grc'
    })
    .otherwise('/');

    $locationProvider.html5Mode(true);
});
