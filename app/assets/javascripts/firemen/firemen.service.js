'use strict';

angular.module('FireStation')

    .factory('firemen', [ '$http', '$state', function($http, $state) {

        var factory = [];
        factory.selectedFireman = {data: null, medicals: null, courses: null, medals: null};
        factory.getFiremen = function() {
            return $http.get('/firemen').then(function(result){
                factory.allFiremen = result.data;
            });
        };factory.getFiremen();

        factory.getMedicals = function() {
           return $http.get('/medicals').then(function(result){
                factory.allMedicals = result.data;
            });
        };factory.getMedicals();

        factory.getCourses = function() {
            return $http.get('/courses').then(function(result){
                factory.allCourses = result.data;
            });
        };factory.getCourses();

        factory.getMedals = function() {
            return $http.get('/medals').then(function(result){
                factory.allMedals = result.data;
            });
        };factory.getMedals();

        factory.selectFireman = function(fireman) {
            console.log(fireman);
            factory.selectedFireman.data = fireman;
            factory.selectedFireman.data.birth_date = new Date(fireman.birth_date);
            factory.selectedFireman.medicals = factory.selectedMedicals(fireman.id);
            factory.selectedFireman.courses = factory.selectedCourses(fireman.id);
            factory.selectedFireman.medals = factory.selectedMedals(fireman.id);
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

        factory.selectedMedals = function(fireman_id) {
            var result = [];
            factory.allMedals.forEach(function(medal) {
                if(medal.firemen_id === fireman_id) {
                    result.push(medal);
                }
            });
            return result;
        };

        return factory;
    }]);