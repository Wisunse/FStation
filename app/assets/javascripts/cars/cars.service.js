'use strict';

angular.module('FireStation')
.factory('cars', ['$http', '$state', function($http, $state) {

    var factory = {};
    factory.selectedCar = {};

    factory.getCars = function() {
        $http.get('/cars').then(function(result){
            console.log(result.data);
            factory.allCars = result.data;
        });
    };factory.getCars();

    return factory;

}]);