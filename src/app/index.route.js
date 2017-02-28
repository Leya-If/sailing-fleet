(function () {
    'use strict';

    angular
        .module('flot')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider, $locationProvider) {
        // ui router state inheritance
        $stateProvider
            .state('nav', {
                templateUrl: 'app/components/navbar/navbar.html',
                controller: 'NavController',
                controllerAs: 'nav'
            })
            .state('home', {
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: 'MainController',
                controllerAs: 'main'
            })
            .state('contacts', {
                url: '/contacts',
                templateUrl: 'app/contacts/contacts.html',
                controller: 'ContController',
                controllerAs: 'cont'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'app/about_program/about.html',
                controller: 'AboutController',
                controllerAs: 'about'
            })
            .state('school', {
                url: '/school',
                templateUrl: 'app/school/school.html',
                controller: 'SchoolController',
                controllerAs: 'school'
            });

        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);

    }

})();
