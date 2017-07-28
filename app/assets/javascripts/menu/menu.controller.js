'use strict';

angular.module('FireStation')

    .controller('MenuController', ['$scope', '$http', '$mdSidenav', 'login', function($scope, $http, $mdSidenav, login) {

        $scope.login = login;

    }]);