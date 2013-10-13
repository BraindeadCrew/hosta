'use strict';

angular.module('hostaApp')
  .controller('MainCtrl', function ($scope) {
        $http.get('recents/recents.json').success(function(data) {
            $scope.files = data;
        });

    $scope.files = [
        {
            name: 'foo.png',
            typeico: 'img/image_ico.png',
            url: 'uploads/foo.png',
            cat: 'Joke',
            date: (new Date).toLocaleString()
        },
        {
            name: 'bar.jpg',
            typeico: 'img/image_ico.png',
            url: 'uploads/foo.png',
            cat: 'Braindead',
            date: (new Date).toLocaleString()
        },
        {
            name: 'potato.yummy',
            typeico: 'img/image_ico.png',
            url: 'uploads/foo.png',
            cat: 'Games',
            date: (new Date).toLocaleString()
        }
    ];

    $scope.options = [
        {
            name: 'Joke',
            id: 0
        },
        {
            name: 'Games',
            id: 1
        },
        {
            name: 'Braindead',
            id: 2
        }
    ];
  });
