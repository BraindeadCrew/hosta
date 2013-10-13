'use strict';

angular.module('hostaApp')
  .controller('MainCtrl', ['$scope', '$http',
    function MainCtrl($scope, $http) {
      $scope.file = {};
      $scope.files = [];
      $scope.categories = [];

      $http.get('files/recents.json').success(function(data) {
        $scope.files = data;
      });

      $http.get('files/categories.json').success(function(data) {
        $scope.categories = data;
        $scope.file = { cat: data[0] };
      });

      /**
       * Called when upload button is clicked in upload form
       * @param file
       */
      $scope.upload = function (file) {
        if ($scope.uploader.$valid) {
          console.log("UPLOAD:", file);
          $http.post('file', file)
            .success(function (data, status) {
              console.log("POST success", data, status);
            })
            .error(function (data, status) {
              console.log("POST error", data, status);
            });
        }
      }
    }
  ])
  .directive('validFile', function () {
    return {
      require: 'ngModel',
      link: function (scope, el, attrs, ngModel) {
        ngModel.$render = function () {
          console.log("ngModel", ngModel);
          var inputFile = document.querySelector('#file_input').files[0];
          if (typeof(inputFile) !== 'undefined') {
            // a file has been choosen : read as data url and set ngModel value
            console.log("Using FileReader API to retrieve file from form...", inputFile);
            var fReader = new FileReader();
            fReader.onload = function (event) {
              ngModel.$setViewValue(event.target.result);
            }
            fReader.readAsDataURL(inputFile);
          } else {
            // nothing selected
            ngModel.$setViewValue(undefined);
          }
        };

        el.bind('change', function () {
          scope.$apply(function () {
            ngModel.$render();
          });
        });
      }
    };
  });