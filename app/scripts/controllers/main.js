'use strict';

angular.module('hostaApp')
  .controller('MainCtrl', ['$scope', '$http',
    function MainCtrl($scope, $http) {
      $http.get('files/recents.json').success(function(data) {
        $scope.files = data;
      });

      $http.get('files/categories.json').success(function(data) {
        $scope.options = data;
      });
    }]);
