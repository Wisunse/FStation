'use strict';

angular.module('FireStation')

.controller('ActionsController', ['$scope', '$http', '$state', '$mdDialog', 'actions',
function($scope, $http, $state, $mdDialog, actions) {

    console.log('ActionsController');

    $scope.actions = actions;

    $scope.addNewAction = function(ev) {

        $mdDialog.show({
            controller: 'AddNewAction',
            templateUrl: 'dialog/_add_new_action.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true,
            fullscreen: true // Only for -xs, -sm breakpoints.
        })
            .then(function(answer) {
                $scope.status = 'You said the information was "' + answer + '".';
            }, function() {
                $scope.status = 'You cancelled the dialog.';
            });

    };

    $scope.showEditAction = function(action) {

        actions.selectedAction = angular.copy(action);
        $mdDialog.show({
            controller: 'AddNewAction',
            templateUrl: 'dialog/_edit_action.html',
            parent: angular.element(document.body),
            // targetEvent: ev,
            clickOutsideToClose:true,
            fullscreen: true // Only for -xs, -sm breakpoints.
        })
            .then(function(answer) {
                $scope.status = 'You said the information was "' + answer + '".';
            }, function() {
                $scope.status = 'You cancelled the dialog.';
            });

    };

    $scope.editAction = function(){
        $http.patch('/departures/'+actions.selectedAction.id,actions.selectedAction).then(function(result){
            actions.getActions();
            $mdDialog.cancel()
        });
    };

    $scope.cancel = function() {
        $mdDialog.cancel();
        actions.getActions();
    };

    $scope.deleteAction = function(selectedAction) {
        $http.delete('/departures/'+selectedAction.id+'.json').then(function(result){
            console.log(result.data);
            actions.getActions();
        });
    };


}]);