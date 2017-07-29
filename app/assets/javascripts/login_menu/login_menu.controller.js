'use strict';

angular.module('FireStation')

    .controller('LoginMenuController', ['$scope', '$http', '$mdSidenav', 'login', function($scope, $http, $mdSidenav, login) {

        $scope.login = login;


    }]);