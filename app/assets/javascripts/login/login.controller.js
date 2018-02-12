'use strict';

angular.module('FireStation')

    .controller('LoginController', ['$scope', '$state', 'Auth', '$rootScope', 'firemen',
        function($scope, $state, Auth, $rootScope, firemen) {

        console.log('LoginController');

        var config = {
                headers: {
                    'X-HTTP-Method-Override': 'POST'
                }
            };

        $scope.user = {
            'email': 'matt@gmail.com',
            'password': 'password'
        };

        $scope.login = function() {

            Auth.login($scope.user, config).then(function(user){
                $rootScope.user = user;
                firemen.getFiremen();
                firemen.getMedicals();
                firemen.getCourses();
                $state.go('firemen');
            });

        }

    }]);