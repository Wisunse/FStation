'use strict';

angular.module('FireStation')

    .controller('RegisterController', ['$scope', '$http', '$mdSidenav', 'Auth', '$rootScope',
        function($scope, $http, $mdSidenav, Auth, $rootScope) {

            var config = {
                headers: {
                    'X-HTTP-Method-Override': 'POST'
                }
            };

            $scope.user = {
                'email': 'matt@gmail.com',
                'username': 'matt',
                'password': 'password'
            };

            $scope.register = function() {

                Auth.register($scope.user, config).then(function(user){
                    $rootScope.user = user;
                    $state.go('firemen');
                });

            }


    }]);