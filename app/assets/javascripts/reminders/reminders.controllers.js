'use strict';

angular.module('FireStation')

.controller('RemindersController', ['$scope', '$http', '$state', '$mdDialog', 'firemen', 'cars',
function($scope, $http, $state, $mdDialog, firemen, cars ) {

    $scope.firemen = firemen;
    $scope.cars = cars;
    console.log(cars.allCars);
    console.log(firemen.allMedicals);
    // var response = firemen.getMedicals();
    // response.then(function(resp) {
    // })


}]);