'use strict';

angular.module('FireStation')

    .controller('LoginController', ['$scope', '$state', 'Auth', '$rootScope', 'firemen',
        function($scope, $state, Auth, $rootScope, firemen) {

            firemen.allFiremen = null;
            firemen.allMedicals = null;
            firemen.allCourses = null;
            firemen.selectedFireman = {data: null, medicals: null, courses: null, medals: null};

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

                firemen.getFiremen();
                firemen.getMedicals();
                firemen.getCourses();
                $state.go('firemen');
            });

        }

    }]);