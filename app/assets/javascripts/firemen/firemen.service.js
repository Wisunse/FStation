'use strict';

angular.module('FireStation')

    .factory('firemen', [ '$http', '$state', function($http, $state) {

        var factory = [];
        factory.getFiremen = function() {
            $http.get('/all_firemen').then(function(result){
                console.log(result.data);
                factory.allFiremen = result.data;
            });
        };factory.getFiremen();


        return factory;
    }]);