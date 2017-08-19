'use strict';

angular.module('FireStation', ['ui.router', 'templates', 'ngMaterial'])

    .config(['$stateProvider', '$locationProvider', '$urlRouterProvider', '$httpProvider', '$mdThemingProvider', function($stateProvider, $locationProvider, $urlRouterProvider, $httpProvider, $mdThemingProvider) {

        $httpProvider.interceptors.push(['$injector', '$q', function ($injector, $q) {
            return {

                'responseError': function (response) {

                    if (response.status === 401) {

                        window.location.href = '/login';
                    }
                    else if (response.status === 470) {

                        window.location.href = '/';
                    }
                    else if (response.status === 520) {

                        window.location.reload();
                    }

                    return $q.reject(response);
                }
            };
        }]);

        $httpProvider.defaults.headers.common['Pragma'] = 'no-cache'; // angular IE caching issue

        if (window.history && window.history.pushState) {

            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
        }

        $stateProvider

            .state('login', {
                url: '/login',
                views: {
                    headerView: {
                        templateUrl: 'menu/_menu.html',
                        controller: 'MenuController'
                    },
                    mainView: {
                        templateUrl: 'login/_login.html',
                        controller: 'LoginController'
                    }
                }
            })
            .state('firemen', {
                url: '/authenticated',
                views: {
                    headerView: {
                        templateUrl: 'menu/_menu.html',
                        controller: 'MenuController'
                    },
                    mainView: {
                        templateUrl: 'firemen/_firemen.html',
                        controller: 'FiremenController'
                    }
                }
            });
    //
    //     $urlRouterProvider.otherwise('/404');

    $mdThemingProvider.theme('default')
            .primaryPalette('grey', {
            'default': '900',
                'hue-1': '100',
                'hue-2': '600',
                'hue-3': 'A100'
        }) .accentPalette('yellow', {
            'default': 'A200'
        }) .warnPalette('red');

        // .backgroundPalette('grey');

    }])

    .run(['$rootScope', '$state', '$stateParams', '$http', 'firemen',
        function ($rootScope, $state, $stateParams, $http, firemen) {

            $rootScope.state = $state;
            $rootScope.stateParams = $stateParams;

            $rootScope.$on('$locationChangeStart', function (event, newLocation, oldLocation) {

                $http.get('/is_logged').then(function(response){

                    if (response) {
                        $state.go('firemen');
                    } else {
                        $state.go('login');
                    }

                });

                var newPath = newLocation.split('/').slice(-1)[0];
                var oldPath = oldLocation.split('/').slice(-1)[0];

                if ( newPath === 'authenticated' ) {
                    firemen.getFiremen();
                    console.log(firemen.allFiremen);
                }

            });

        }]);