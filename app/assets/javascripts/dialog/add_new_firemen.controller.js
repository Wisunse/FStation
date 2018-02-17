'use strict';

angular.module('FireStation')

    .controller('AddNewFiremen', ['$scope', '$http', '$state', '$mdDialog', 'firemen', function($scope, $http, $state, $mdDialog, firemen ) {

        $scope.newFireman = {};
        $scope.gender = ['Mężczyzna', 'Kobieta'];

        $scope.addFireman = function() {
            $http.post('/firemen', $scope.newFireman).then(function successCallback(response) {
                $mdDialog.cancel();
                firemen.getFiremen();
            });
        };

        $scope.cancel = function(){
            $mdDialog.cancel()
        };

    }]);