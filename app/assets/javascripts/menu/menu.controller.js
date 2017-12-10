'use strict';

angular.module('FireStation')

.controller('MenuController', ['$scope', '$http', '$mdSidenav', '$state', 'login',
    function($scope, $http, $mdSidenav, $state, login) {

    $scope.login = login;

    $scope.goLogin = function (){
        $state.go('login');
    };

    $scope.goFiremen = function (){
        $state.go('firemen');
    };

    $scope.goCars = function (){
        $state.go('cars');
    };

    $scope.goActions = function (){
        $state.go('actions');
    };

    $scope.goAlarms = function (){
        $state.go('alarms');
    };

    $scope.goReminders = function (){
        $state.go('reminders');
    };

    $scope.goSettings = function (){
        $state.go('settings');
    };


}]);