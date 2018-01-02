'use strict';

angular.module('FireStation', ['ui.router', 'templates', 'ngMaterial', 'Devise'])

.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', '$httpProvider', '$mdThemingProvider',
function($stateProvider, $locationProvider, $urlRouterProvider, $httpProvider, $mdThemingProvider) {

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
                    templateUrl: 'login_menu/_login_menu.html',
                    controller: 'LoginMenuController'
                },
                mainView: {
                    templateUrl: 'login/_login.html',
                    controller: 'LoginController'
                }
            }
        })
        .state('register', {
            url: '/register',
            views: {
                headerView: {
                    templateUrl: 'login_menu/_login_menu.html',
                    controller: 'LoginMenuController'
                },
                mainView: {
                    templateUrl: 'register/_register.html',
                    controller: 'RegisterController'
                }
            }
        })
        .state('home', {
            url: '/',
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
        })
        .state('firemen', {
            url: '/firemen_view',
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
        })
        .state('cars', {
            url: '/cars_view',
            views: {
                headerView: {
                    templateUrl: 'menu/_menu.html',
                    controller: 'MenuController'
                },
                mainView: {
                    templateUrl: 'cars/_cars.html',
                    controller: 'CarsController'
                }
            }
        })
        .state('actions', {
            url: '/actions_view',
            views: {
                headerView: {
                    templateUrl: 'menu/_menu.html',
                    controller: 'MenuController'
                },
                mainView: {
                    templateUrl: 'actions/_actions.html',
                    controller: 'ActionsController'
                }
            }
        })
        .state('alarms', {
            url: '/alarms_view',
            views: {
                headerView: {
                    templateUrl: 'menu/_menu.html',
                    controller: 'MenuController'
                },
                mainView: {
                    templateUrl: 'alarms/_alarms.html',
                    controller: 'AlarmsController'
                }
            }
        })
        .state('reminders', {
            url: '/reminders_view',
            views: {
                headerView: {
                    templateUrl: 'menu/_menu.html',
                    controller: 'MenuController'
                },
                mainView: {
                    templateUrl: 'reminders/_reminders.html',
                    controller: 'RemindersController'
                }
            }
        })
        .state('settings', {
                url: '/settings_view',
                views: {
                    headerView: {
                        templateUrl: 'menu/_menu.html',
                        controller: 'MenuController'
                    },
                    mainView: {
                        templateUrl: 'settings/_settings.html',
                        controller: 'SettingsController'
                    }
                }
            });

        $urlRouterProvider.otherwise('/404');

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

            var newPath = newLocation.split('/').slice(-1)[0];
            var oldPath = oldLocation.split('/').slice(-1)[0];

            if ( newPath === 'authenticated' ) {
                firemen.getFiremen();
                console.log(firemen.allFiremen);
            }

        });

    }]);