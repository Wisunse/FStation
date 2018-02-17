'use strict';

angular.module('FireStation')

    .controller('RegisterController', ['$scope', '$http', '$mdSidenav', 'Auth', '$rootScope', '$state',
        function($scope, $http, $mdSidenav, Auth, $rootScope, $state) {

            var config = {
                headers: {
                    'X-HTTP-Method-Override': 'POST'
                }
            };

            $scope.user = {
                'email': '',
                'username': '',
                'password': '',
                'confirmPassword': ''
            };

            $scope.register = function() {
                if($scope.user.password) {
                    delete $scope.user.confirmPassword;
                    Auth.register($scope.user, config).then(function(user) {

                        $rootScope.user = user;

                        $scope.user = {
                            'email': '',
                            'username': '',
                            'password': '',
                            'confirmPassword': ''
                        };

                        $state.go('login');
                    });
                }
            }

    }]);