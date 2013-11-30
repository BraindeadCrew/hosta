'use strict';

var hostaApp = angular.module('hostaApp');

hostaApp.controller('MainCtrl', ['$scope', '$http',
    function MainCtrl($scope, $http) {
      $scope.file = {};
      $scope.files = [];

      $http.get('api/recents').success(function (data) {
        data.map(function (file) {
          file.type = (file.type.indexOf('image') != -1) ? 'images/image_ico.png' : 'images/unknown_ico.png';
          file.date = timeConverter(file.date/1000);
        });
        $scope.files = data;
        console.log(data);
      });

      /**
       * Called when upload button is clicked in upload form
       * @param file
       */
      $scope.upload = function (file) {
        if ($scope.uploader.$valid) {
          $http.post('api/file', file)
            .success(function (data, status) {
              console.log("POST success", data, status);
              // TODO show success in the view for user
            })
            .error(function (data, status) {
              console.log("POST error", data, status);
              // TODO show error for user
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
          var inputFile = document.querySelector('#file_input').files[0];
          if (typeof(inputFile) !== 'undefined') {
            // a file has been choosen : read as data url and set ngModel value
            console.log("Using FileReader API to retrieve file from form...", inputFile);
            var fReader = new FileReader();
            fReader.onload = function (event) {
              ngModel.$setViewValue({
                input: fReader.result,
                name: inputFile.name
              });

            }
            fReader.readAsBinaryString(inputFile);
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

function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp*1000);
  var year = a.getFullYear();
  var month = a.getMonth();
  var date = a.getDate();
  var hour = a.getHours().toString().length == 1 ? '0'+ a.getHours(): a.getHours();
  var min = a.getMinutes().toString().length == 1 ? '0'+ a.getMinutes(): a.getMinutes();
  var sec = a.getSeconds().toString().length == 1 ? '0'+ a.getSeconds(): a.getSeconds();
  var time = hour+':'+min+':'+sec+' '+date+'/'+month+'/'+year;
  return time;
}