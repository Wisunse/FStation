'use strict';

angular.module('FireStation')
.factory('cars', ['$http', '$state', function($http, $state) {

    var factory = {};
    factory.selectedCar = {};

    factory.getCars = function() {
        $http.get('/cars').then(function(result){
            factory.allCars = result.data;
        });
    };factory.getCars();

    factory.daysLeft = function(date){
        var today = new Date();
        date = new Date(date);
        var msPerDay = 24 * 60 * 60 * 1000 ;
        var timeLeft = date.getTime() - today.getTime();
        return Math.round(timeLeft / msPerDay);
    };

    return factory;

}]);