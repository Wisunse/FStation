'use strict';

angular.module('FireStation')

    .controller('AddNewFiremen', ['$scope', '$http', '$state', '$mdDialog', 'firemen', function($scope, $http, $state, $mdDialog, firemen ) {

        $scope.newFireman = {};

        $scope.addFireman = function() {
            $http.post('/firemen', $scope.newFireman).then(function successCallback(response) {
                console.log(response);
            });
        };
    }]);