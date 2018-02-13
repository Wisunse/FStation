'use strict';

angular.module('FireStation')
    .factory('actions', ['$http', '$state', 'firemen', function($http, $state, firemen) {

        var factory = {};
        factory.selectedCar = {};
        var promise = firemen.getFiremen();

        factory.getActions = function() {
            $http.get('/departures').then(function(result){
                factory.allActions = result.data;
                factory.allActions.forEach(function(action) {
                    action.orderedFiremen = [];
                   if(action.firemens !== null) {
                       var man = action.firemens.split(',');
                       man.forEach(function(men) {
                           firemen.allFiremen.forEach(function(singleFiremen){
                               if (singleFiremen.id == men){
                                   action.orderedFiremen.push(singleFiremen);
                               }
                           })
                       });
                   }
                });
            });
        };

        promise.then(function(){
            factory.getActions();
        });

        return factory;

    }]);