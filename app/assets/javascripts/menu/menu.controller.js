'use strict';

angular.module('FireStation')

.controller('MenuController', ['$scope', '$http', '$mdSidenav', '$state', 'login', 'Auth',
    function($scope, $http, $mdSidenav, $state, login, Auth) {

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

    $scope.goLogout = function() {

        var config = {
            headers: {
                'X-HTTP-Method-Override': 'DELETE'
            }
        };

        Auth.logout(config).then(function(oldUser) {
            $state.go('login');
            location.reload();
        }, function(error) {
            // An error occurred logging out.
        });


    };


}]);