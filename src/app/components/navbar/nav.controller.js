/**
 * Created by le on 27.02.2017.
 */
(function() {
    'use strict';

    angular
        .module('flot')
        .controller('NavController', NavController);

    /** @ngInject */
    function NavController($translate, $scope) {

        $scope.changeLanguage = function (key) {
            $translate.use(key);
        };

        console.log('gogo!');



    }
})();
