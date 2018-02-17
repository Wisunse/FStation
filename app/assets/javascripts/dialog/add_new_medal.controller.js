'use strict';

angular.module('FireStation')

.controller('AddNewMedal', ['$scope', '$http', '$state', '$mdDialog', 'firemen',
    function($scope, $http, $state, $mdDialog, firemen ) {

    $scope.newMedal = {};
    console.log(firemen.selectedFireman.data.id);
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

    $scope.cancel = function(){
        $mdDialog.cancel()
    };

}]);