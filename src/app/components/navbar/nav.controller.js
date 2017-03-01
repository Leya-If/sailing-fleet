/**
 * Created by le on 27.02.2017.
 */
(function () {
    'use strict';

    angular
        .module('flot')
        .controller('NavController', NavController);

    /** @ngInject */
    function NavController($translate, $scope) {

        $scope.en = true;
        $scope.ru = false;
        $scope.changeLanguage = function (key) {
            $translate.use(key);
            key == 'ru' ? $scope.ru = true : $scope.ru = false;
            key == 'en' ? $scope.en = true : $scope.en = false;
            console.log($scope.ru);
            console.log($scope.en);
        };


    }
})();
