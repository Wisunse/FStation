'use strict';

angular.module('FireStation')

    .controller('AddNewCourse', ['$scope', '$http', '$state', '$mdDialog', 'firemen', function($scope, $http, $state, $mdDialog, firemen ) {

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

        $scope.cancel = function(){
            $mdDialog.cancel()
        };

    }]);