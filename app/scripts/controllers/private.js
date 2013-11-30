'use strict';

var hostaApp = angular.module('hostaApp');
hostaApp.controller('PrivateCtrl', ['$scope', '$routeParams', '$http', '$location',
  function PrivateCtrl($scope, $routeParams, $http, $location) {
    $scope.id = $routeParams.id;
    $http({ method: 'GET', url: '/api/private/' + $routeParams.id })
      .success(function (data, status, headers, config) {
        console.log(data, data.name);
        $scope.name = data.name;
      })
      .error(function (data, status, headers, config) {
        $location.url('/you-failed-hardly');
      });
  }
]);