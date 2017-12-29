'use strict';

angular.module('FireStation')

    .controller('FiremenController', ['$scope', '$http', '$state', '$mdDialog', 'firemen',
        function($scope, $http, $state, $mdDialog, firemen ) {

        console.log('FiremenController');

        $scope.firemen = firemen;
        $scope.customFullscreen = true;
        $scope.sections = ['MDP', 'CZYNNI', 'ZWYKLI', 'HONOROWI'];

        console.log(firemen.allFiremen);

        $scope.addNewFireman = function(ev) {

            $mdDialog.show({
                controller: 'AddNewFiremen',
                templateUrl: 'dialog/_add_new_fireman.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose:true,
                fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
            })
                .then(function(answer) {
                    $scope.status = 'You said the information was "' + answer + '".';
                }, function() {
                    $scope.status = 'You cancelled the dialog.';
                });
        };

        $scope.selectedFireman = function(fireman) {

            firemen.selectedFireman = fireman;

        };

        $scope.saveEditFireman = function() {

            var url = '/firemen/' + firemen.selectedFireman.id;
            $http.patch(url, firemen.selectedFireman).then(function(callback) {
                console.log(callback);
            });

        };

        $scope.deleteFireman = function() {
            $http.delete('/firemen/' + firemen.selectedFireman.id).then(function(callback) {
                console.log(callback);
            });
        };


    }]);
