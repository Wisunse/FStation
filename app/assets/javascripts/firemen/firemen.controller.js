'use strict';

angular.module('FireStation')

    .controller('FiremenController', ['$scope', '$http', '$state', '$mdDialog', 'firemen', '$mdToast',
        function($scope, $http, $state, $mdDialog, firemen, $mdToast ) {

        $scope.firemen = firemen;
        $scope.customFullscreen = true;
        $scope.sections = ['MDP', 'CZYNNI', 'ZWYKLI', 'HONOROWI'];
        $scope.firemenFilter = '';
        $scope.gender = ['Mężczyzna', 'Kobieta'];


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

        $scope.addNewMedal = function(ev) {

            $mdDialog.show({
                controller: 'AddNewMedal',
                templateUrl: 'dialog/_add_new_medal.html',
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

        };

        $scope.showEditMedical = function(medical){

            firemen.editedMedical = angular.copy(medical);
            firemen.editedMedical.examination_date = new Date(medical.examination_date);
            firemen.editedMedical.start_date = new Date(medical.start_date);
            firemen.editedMedical.end_date = new Date(medical.end_date);

            $mdDialog.show({
                controller: 'AddNewMedical',
                templateUrl: 'dialog/_edit_medical.html',
                parent: angular.element(document.body),
                // targetEvent: ev,
                clickOutsideToClose:true,
                fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
            })
                .then(function(answer) {
                    $scope.status = 'You said the information was "' + answer + '".';
                }, function() {
                    $scope.status = 'You cancelled the dialog.';
                });

        };

        $scope.showEditCourse = function(course) {

            firemen.editedCourse = angular.copy(course);
            // firemen.editedCourse.date = new Date(course.date);
            // firemen.editedCourse.date_course = new Date(course.date_course);
            firemen.editedCourse.expiry_date = new Date(course.expiry_date);
            firemen.editedCourse.medical_examination_from = new Date(course.medical_examination_from);
            firemen.editedCourse.medical_examination_to = new Date(course.medical_examination_to);

            $mdDialog.show({
                controller: 'AddNewCourse',
                templateUrl: 'dialog/_edit_course.html',
                parent: angular.element(document.body),
                // targetEvent: ev,
                clickOutsideToClose:true,
                fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
            })
                .then(function(answer) {
                    $scope.status = 'You said the information was "' + answer + '".';
                }, function() {
                    $scope.status = 'You cancelled the dialog.';
                });

        };

        $scope.showEditMedal = function(medal) {

            firemen.editedMedal = angular.copy(medal);
            firemen.editedMedal.granting_date = new Date(medal.granting_date);

            $mdDialog.show({
                controller: 'AddNewMedal',
                templateUrl: 'dialog/_edit_medal.html',
                parent: angular.element(document.body),
                // targetEvent: ev,
                clickOutsideToClose:true,
                fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
            })
                .then(function(answer) {
                    $scope.status = 'You said the information was "' + answer + '".';
                }, function() {
                    $scope.status = 'You cancelled the dialog.';
                });

        };

        $scope.howOld = function(date) {
            if(date !== undefined){
                var today = new Date();
                return today.getFullYear() - date.getFullYear();
            }else {
                return null;
            }
        };


    }]);
