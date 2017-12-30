'use strict';

angular.module('FireStation')

    .factory('firemen', [ '$http', '$state', function($http, $state) {

        var factory = [];
        factory.selectedFireman = {data: null, medicals: null};
        factory.getFiremen = function() {
            $http.get('/firemen').then(function(result){
                console.log(result.data);
                factory.allFiremen = result.data;
            });
        };factory.getFiremen();

        factory.getMedicals = function() {
           return $http.get('/medicals').then(function(result){
                console.log(result.data);
                factory.allMedicals = result.data;
            });
        };factory.getMedicals();

        factory.selectFireman = function(fireman) {
            factory.selectedFireman.data = fireman;
            factory.selectedFireman.medicals = factory.selectedMedicals(fireman.id);
        };

        factory.selectedMedicals = function(fireman_id) {
            var result = [];
            factory.allMedicals.forEach(function(medical) {
                if(medical.firemen_id === fireman_id) {
                    result.push(medical);
                }
            });
            return result;
        };


        return factory;
    }]);