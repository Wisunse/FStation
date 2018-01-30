'use strict';

angular.module('FireStation')

.controller('CarsController', ['$scope', '$http', '$state', '$mdDialog', 'cars',
function($scope, $http, $state, $mdDialog, cars) {

    console.log('CarsController');

    $scope.cars = cars;

    $scope.addNewCar = function(ev) {

        $mdDialog.show({
            controller: 'AddNewCar',
            templateUrl: 'dialog/_add_new_car.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true,
            fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
        })
            .then(function(answer) {
                $scope.status = 'You said the information was "' + answer + '".';
            }, function() {
                $scope.status = 'You cancelled the dialog.';
            });
    };

    $scope.showEditCar = function(ev, car) {

        cars.selectedCar = car;
        cars.selectedCar.servicing_to = new Date(car.servicing_to);
        $mdDialog.show({
            controller: 'CarsController',
            templateUrl: 'dialog/_edit_car.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true,
            fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
        })
            .then(function(answer) {
                $scope.status = 'You said the information was "' + answer + '".';
            }, function() {
                $scope.status = 'You cancelled the dialog.';
            });

    };

    $scope.editCar = function(){

        $http.patch('/cars/'+cars.selectedCar.id,cars.selectedCar).then(function(result){
            console.log(result.data);
            cars.getCars();
            $mdDialog.cancel()
        });

    };

    $scope.cancel = function() {
        $mdDialog.cancel();
        cars.getCars();
    };

    $scope.daysLeft = function(date){
        var today = new Date();
        date = new Date(date);
        var msPerDay = 24 * 60 * 60 * 1000 ;
        var timeLeft = date.getTime() - today.getTime();
        return Math.round(timeLeft / msPerDay);
    };

    $scope.deleteCar = function(selectedCar) {
        $http.delete('/cars/'+selectedCar.id+'.json').then(function(result){
            console.log(result.data);
            cars.getCars();
        });
    };


}]);