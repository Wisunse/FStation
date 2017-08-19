'use strict';

angular.module('FireStation')

    .controller('FiremenController', ['$scope', '$http', '$state', '$mdDialog', 'firemen', function($scope, $http, $state, $mdDialog, firemen ) {

        console.log('LoginController');

        $scope.firemen = firemen;
        $scope.customFullscreen = true;

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


    }]);