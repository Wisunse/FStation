'use strict';

angular.module('FireStation')

    .controller('AddNewFiremen', ['$scope', '$http', '$state', '$mdDialog', 'firemen', function($scope, $http, $state, $mdDialog, firemen ) {

        $scope.fireman = {'name': 'matt', 'surname': 'm', 'email': 'asd@asd.pl'};

        $scope.addFireman = function() {
            $http.post('/add_fireman', $scope.fireman).then(function successCallback(response) {
                console.log(response);
            });
        };
    }]);