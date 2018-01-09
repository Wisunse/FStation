'use strict';

angular.module('FireStation')

.controller('SettingsController', ['$scope', '$http', '$state', '$mdDialog', 'Auth',
function($scope, $http, $state, $mdDialog, Auth ) {

    $scope.parameters = {
        password: '',
        password_confirmation: '',
        reset_password_token: ''
    };

    $scope.saveChangePassword = function (){
        Auth.resetPassword($scope.parameters).then(function(new_data) {
            console.log(new_data); // => {id: 1, ect: '...'}
        }, function(error) {
            console.log(error);
            // Reset password failed...
        });
    };

}]);