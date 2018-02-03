'use strict';

angular.module('FireStation')

    .controller('AddNewCourse', ['$scope', '$http', '$state', '$mdDialog', 'firemen', function($scope, $http, $state, $mdDialog, firemen ) {

        $scope.firemen = firemen;
        $scope.newCourse = {};


        $scope.addMedical = function() {

            $scope.newCourse.firemen_id = firemen.selectedFireman.data.id;

            $http.post('/courses', $scope.newCourse).then(function successCallback(response) {
                $mdDialog.cancel();
                var myDataPromise = firemen.getCourses();
                myDataPromise.then(function(result) {
                    firemen.selectFireman(firemen.selectedFireman.data);
                });
            });
        };

        $scope.editCourse = function() {
            $http.put('/courses/' + $scope.firemen.editedCourse.id, $scope.firemen.editedCourse).then(function successCallback(response) {
                $mdDialog.cancel();
                var myDataPromise = firemen.getCourses();
                myDataPromise.then(function(result) {
                    firemen.selectFireman(firemen.selectedFireman);
                });
            });
        };
        
        $scope.showDeleteCourse = function(ev) {

            var confirm = $mdDialog.confirm()
                .title()
                .textContent('Czy na pewno chcesz usunąć ten kurs?')
                .ariaLabel('Czy na pewno chcesz usunąć ten kurs?')
                .targetEvent(ev)
                .ok('Tak')
                .cancel('Anuluj');

            $mdDialog.show(confirm).then(function() {
                $http.delete('/courses/' + $scope.firemen.editedCourse.id).then(function successCallback(response) {});
                var myDataPromise = firemen.getCourses();
                myDataPromise.then(function(result) {
                    firemen.selectFireman(firemen.selectedFireman);
                });
                }, function() {

            });

        };

        $scope.cancel = function(){
            $mdDialog.cancel()
        };

    }]);