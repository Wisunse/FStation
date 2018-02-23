'use strict';

angular.module('FireStation')

.controller('AddNewMedical', ['$scope', '$http', '$state', '$mdDialog', 'firemen', function($scope, $http, $state, $mdDialog, firemen ) {

    $scope.newMedical = {};
    $scope.firemen = firemen;

    $scope.addMedical = function() {

        $scope.newMedical.firemen_id = firemen.selectedFireman.data.id;

        $http.post('/medicals', $scope.newMedical).then(function successCallback(response) {
            $mdDialog.cancel();
            var myDataPromise = firemen.getMedicals();
            myDataPromise.then(function(result) {
                firemen.selectFireman(firemen.selectedFireman.data);
            });
        });
    };

    $scope.editMedical = function() {

        $http.put('/medicals/' + firemen.selectedFireman.data.id, firemen.editedMedical).then(function successCallback(response) {
            $mdDialog.cancel();
            var myDataPromise = firemen.getMedicals();
            myDataPromise.then(function(result) {
                firemen.selectFireman(firemen.selectedFireman.data);
            });
        });

    };

    $scope.showDeleteMedical = function(ev) {

        var confirm = $mdDialog.confirm()
            .title()
            .textContent('Czy na pewno chcesz usunąć to badanie?')
            .ariaLabel('Czy na pewno chcesz usunąć to badanie?')
            .targetEvent(ev)
            .ok('Tak')
            .cancel('Anuluj');

        $mdDialog.show(confirm).then(function() {
            $http.delete('/medicals/' + $scope.firemen.editedMedical.id).then(function successCallback(response) {
                var myDataPromise = firemen.getMedicals();
                myDataPromise.then(function(result) {
                    firemen.selectFireman(firemen.selectedFireman.data);
                });
            });

        }, function() {

        });

    };

    $scope.cancel = function(){
        $mdDialog.cancel()
    };

}]);