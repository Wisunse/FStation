'use strict';

angular.module('FireStation')

    .controller('FiremenController', ['$scope', '$http', '$state', '$mdDialog', 'firemen', '$mdToast',
        function($scope, $http, $state, $mdDialog, firemen, $mdToast ) {

        console.log('FiremenController');

        $scope.firemen = firemen;
        $scope.customFullscreen = true;
        $scope.sections = ['MDP', 'CZYNNI', 'ZWYKLI', 'HONOROWI'];
        $scope.firemenFilter = '';

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



        $scope.saveEditFireman = function() {
            console.log(firemen.selectedFireman.data);
            var url = '/firemen/' + firemen.selectedFireman.data.id;
            $http.patch(url, firemen.selectedFireman.data).then(function(callback) {
                firemen.getFiremen();
                $mdToast.show(
                    $mdToast.simple()
                        .textContent('Zapisano!')
                        .position('top right')
                        .hideDelay(3000)
                );
            });

        };

        $scope.deleteFireman = function() {
            $http.delete('/firemen/' + firemen.selectedFireman.id).then(function(callback) {
                firemen.getFiremen();
            });
        };

        $scope.addNewMedical = function(ev) {

            $mdDialog.show({
                controller: 'AddNewMedical',
                templateUrl: 'dialog/_add_new_medical.html',
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

        $scope.addNewCourse = function(ev) {

            $mdDialog.show({
                controller: 'AddNewCourse',
                templateUrl: 'dialog/_add_new_course.html',
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

        }


    }]);
