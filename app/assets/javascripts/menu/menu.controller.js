'use strict';

angular.module('FireStation')

    .controller('MenuController', ['$scope', '$http', '$mdSidenav', 'login', function($scope, $http, $mdSidenav, login) {

        $scope.login = login;

        // $scope.tabs = [
        //     { title: 'p1', content: "page 1"},
        //     { title: 'p2', content: "page 2"},
        //     { title: 'p2', content: "page 3"}
        // ];
        // $scope.selectedIndex = 0;

        // var menuItems = []
        //     {'name': 'strazacy' , 'goto': 'firemen', 'icon': 'portrait' }
        //     var MenuItem = function(subtitle, goTo, icon){
        //       this.subtitle = subtitle;
        //       this.toTo = goTo;
        //       this.icon = icon
        //     };
        //
        //     menuItems.push(new)


    }]);