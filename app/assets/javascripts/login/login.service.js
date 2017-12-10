'use strict';

angular.module('FireStation')

    .factory('login', [ '$http', '$state', '$mdSidenav',  function($http, $state, $mdSidenav) {

        var factory = [];

        factory.openLeftMenu = function() {
            $mdSidenav('left').toggle();
        };

        return factory;
    }]);