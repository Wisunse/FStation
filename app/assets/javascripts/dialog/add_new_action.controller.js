'use strict';

angular.module('FireStation')

    .controller('AddNewAction', ['$scope', '$http', '$state', '$mdDialog', 'actions',
        function($scope, $http, $state, $mdDialog, actions ) {

            $scope.newAction = {};

            $scope.addAction = function() {
                $http.post('/departures', $scope.newAction).then(function successCallback(response) {
                    $mdDialog.cancel();
                    actions.getActions();
                });
            };

            $scope.cancel = function(){
                $mdDialog.cancel()
            };

        }]);