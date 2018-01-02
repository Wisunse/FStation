'use strict';

angular.module('FireStation')

    .controller('LoginMenuController', ['$scope', '$http', '$mdSidenav', 'login', '$state',
        function($scope, $http, $mdSidenav, login, $state) {

        $scope.login = login;

        $scope.goRegistration = function() {
            $state.go('register');
        };

        $scope.goLogin = function() {
            $state.go('login');
        };


    }]);