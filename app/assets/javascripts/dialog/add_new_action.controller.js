'use strict';

angular.module('FireStation')

    .controller('AddNewAction', ['$scope', '$http', '$state', '$mdDialog', 'actions', 'firemen',
        function($scope, $http, $state, $mdDialog, actions, firemen ) {

            $scope.firemen = firemen;
            $scope.actions = actions;
            $scope.newAction = { name: null, incident_date: null, firemens: [], note: null };

            $scope.addAction = function() {
                $scope.newAction.firemens = $scope.newAction.firemens.join();
                $http.post('/departures', $scope.newAction).then(function successCallback(response) {
                    $mdDialog.cancel();
                    actions.getActions();
                });
            };

            $scope.editAction = function() {
                console.log(actions.selectedAction);
                actions.selectedAction.firemens = actions.selectedAction.firemens.join();
                delete actions.selectedAction.orderedFiremen;
                $http.patch('/departures/'+actions.selectedAction.id,actions.selectedAction).then(function(result){
                    actions.getActions();
                    $mdDialog.cancel()
                });
            };

            $scope.exists = function (item, list) {
                list = angular.copy(list.join(','));
                return list.indexOf(item) > -1;
            };

            $scope.toggle = function (item, list) {
                item = item.toString();
                var idx = list.indexOf(item);
                if (idx > -1) {
                    list.splice(idx, 1);
                }
                else {
                    list.push(item);
                }
            };

            $scope.cancel = function(){
                $mdDialog.cancel()
            };

        }]);