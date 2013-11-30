'use strict';

angular.module('hostaApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      }).when('/p/:id', {
        templateUrl: 'views/private.html',
        controller: 'PrivateCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  });