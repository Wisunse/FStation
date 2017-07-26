'use strict';

angular.module('FireStation')

    .controller('LoginController', ['$scope', '$http', function($scope, $http) {

        console.log('LoginController');

        $scope.user = {};
        $scope.user = {
            'username': 'matt',
            'password_digest': '1234'
        };

        $scope.login = function() {
            console.log('login');
            // var data = {
            //   'username': $scope.user.username,
            //   'password': $scope.user.password
            // };
            // console.log(data);

            $http.post('/login', $scope.user).then(function successCallback(response) {
                console.log(response);
            });
        }
    }]);