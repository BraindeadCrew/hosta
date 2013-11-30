'use strict';

var hostaApp = angular.module('hostaApp');

hostaApp.controller('PrivateCtrl', ['$scope', '$routeParams', '$http',
  function PrivateCtrl($scope, $routeParams, $http) {
    $scope.id = $routeParams.id;
    $scope.name = 'tmp';
  }
]);