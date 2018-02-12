'use strict';

angular.module('FireStation')
    .factory('actions', ['$http', '$state', function($http, $state) {

        var factory = {};
        factory.selectedCar = {};

        factory.getActions = function() {
            $http.get('/departures').then(function(result){
                console.log(result.data);
                factory.allActions = result.data;
            });
        };factory.getActions();

        return factory;

    }]);