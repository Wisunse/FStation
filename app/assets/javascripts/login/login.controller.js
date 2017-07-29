'use strict';

angular.module('FireStation')

    .controller('LoginController', ['$scope', '$http', '$state', function($scope, $http, $state) {

        console.log('LoginController');

        $scope.user = {
            'username': 'Michael Hartl',
            'password_digest': 'foobar'
        };

        $scope.login = function() {

            $http.post('/login', $scope.user).then(function successCallback(response) {
               if(response.data === true) {
                 $state.go('firemen');
               } else {
                   alert('try again')
               }
            });
        }

    }]);