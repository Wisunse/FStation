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

    $scope.cancel = function(){
        $mdDialog.cancel()
    };

}]);