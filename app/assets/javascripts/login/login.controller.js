'use strict';

angular.module('FireStation')

    .controller('LoginController', ['$scope', '$state', 'Auth', '$rootScope',
        function($scope, $state, Auth, $rootScope) {

        var config = {
                headers: {
                    'X-HTTP-Method-Override': 'POST'
                }
            };

        // $scope.user = {
        //     'email': 'matt@gmail.com',
        //     'password': 'password'
        // };

        $scope.user = {
            'email': '',
            'password': ''
        };

        $scope.login = function() {
            Auth.login($scope.user, config).then(function(user){
                $rootScope.user = user;
                $state.go('firemen');
            });
        }

    }]);