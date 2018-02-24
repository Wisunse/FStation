'use strict';

angular.module('FireStation')

.controller('AddNewMedal', ['$scope', '$http', '$state', '$mdDialog', 'firemen',
    function($scope, $http, $state, $mdDialog, firemen ) {

    $scope.newMedal = {};
    $scope.firemen = firemen;

    $scope.addMedal = function() {
        $scope.newMedal.firemen_id = firemen.selectedFireman.data.id;
        $http.post('/medals', $scope.newMedal).then(function successCallback(response) {
            $mdDialog.cancel();

            var myDataPromise = firemen.getMedals();
            myDataPromise.then(function(result) {
                firemen.selectFireman(firemen.selectedFireman.data);
            })
        });
    };

        $scope.editMedal = function() {
            $http.put('/medals/' + $scope.firemen.editedMedal.id, $scope.firemen.editedMedal).then(function successCallback(response) {
                $mdDialog.cancel();
                var myDataPromise = firemen.getMedals();
                myDataPromise.then(function(result) {
                    firemen.selectFireman(firemen.selectedFireman.data);
                });
            });
        };

        $scope.showDeleteMedal = function(ev) {

            var confirm = $mdDialog.confirm()
                .title()
                .textContent('Czy na pewno chcesz usunąć to odznaczenie?')
                .ariaLabel('Czy na pewno chcesz usunąć to odznaczenie?')
                .targetEvent(ev)
                .ok('Tak')
                .cancel('Anuluj');

            $mdDialog.show(confirm).then(function() {
                $http.delete('/medals/' + $scope.firemen.editedMedal.id+'.json').then(function successCallback(response) {
                    var myDataPromise = firemen.getMedals();
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