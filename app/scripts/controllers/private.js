'use strict';

var hostaApp = angular.module('hostaApp');
hostaApp.controller('PrivateCtrl', ['$scope', '$routeParams', '$http', '$location',
  function PrivateCtrl($scope, $routeParams, $http, $location) {
    $scope.id = $routeParams.id;
    $http({ method: 'GET', url: '/api/private/' + $routeParams.id })
      .success(function (data, status, headers, config) {
        $scope.privateSpace = data;
      })
      .error(function (data, status, headers, config) {
        $location.url('/you-failed-hardly');
      });

    $scope.save = function (privateSpace) {
      console.log({ name: privateSpace.name, visibility: privateSpace.visibility });
      $http.post('/api/private/' + $scope.id,
          JSON.stringify({ name: privateSpace.name, visibility: privateSpace.visibility }))
        .success(function (data, status, headers, config) {
          // TODO
          console.log("ok", data, status, headers, config);
        }).error(function (data, status, headers, config) {
          // TODO
          console.log("err", data, status, headers, config);
        });
    }
  }
])
;