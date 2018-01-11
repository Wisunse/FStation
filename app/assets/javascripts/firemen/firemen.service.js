'use strict';

angular.module('FireStation')

    .factory('firemen', [ '$http', '$state', function($http, $state) {

        var factory = [];
        factory.selectedFireman = {data: null, medicals: null};
        factory.getFiremen = function() {
            $http.get('/firemen').then(function(result){
                console.log(result.data);
                factory.allFiremen = result.data;
            });
        };factory.getFiremen();

        factory.getMedicals = function() {
           return $http.get('/medicals').then(function(result){
                console.log(result.data);
                factory.allMedicals = result.data;
            });
        };factory.getMedicals();

        factory.getCourses = function() {
            return $http.get('/courses').then(function(result){
                console.log(result.data);
                factory.allCourses = result.data;
            });
        };factory.getCourses();

        factory.selectFireman = function(fireman) {
            factory.selectedFireman.data = fireman;
            factory.selectedFireman.medicals = factory.selectedMedicals(fireman.id);
            factory.selectedFireman.courses = factory.selectedCourses(fireman.id);

        };

        factory.selectedMedicals = function(fireman_id) {
            var result = [];
            factory.allMedicals.forEach(function(medical) {
                if(medical.firemen_id === fireman_id) {
                    result.push(medical);
                }
            });
            return result;
        };

        factory.selectedCourses = function(fireman_id) {
            var result = [];
            factory.allCourses.forEach(function(course) {
                if(course.firemen_id === fireman_id) {
                    result.push(course);
                }
            });
            return result;
        };


        return factory;
    }]);