'use strict';

angular.module('FireStation')

    .controller('AddNewCar', ['$scope', '$http', '$state', '$mdDialog', 'cars',
        function($scope, $http, $state, $mdDialog, cars ) {

        $scope.newCar = {};

        $scope.addCar = function() {
            $http.post('/cars', $scope.newCar).then(function successCallback(response) {
                $mdDialog.cancel();
                cars.getCars();
            });
        };

        $scope.cancel = function(){
            $mdDialog.cancel()
        };

    }]);