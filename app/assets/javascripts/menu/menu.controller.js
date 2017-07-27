'use strict';

angular.module('FireStation')

    .controller('MenuController', ['$scope', '$http', function($scope, $http) {
        console.log('MenuController');
        $scope.currentNavItem = 'page1';
        console.log($scope.currentNavItem)


    }]);