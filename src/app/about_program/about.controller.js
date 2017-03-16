/**
 * Created by le on 28.02.2017.
 */

(function () {
    'use strict';

    angular
        .module('flot')
        .controller('AboutController', AboutController);

    /** @ngInject */
    function AboutController($scope) {
        var vm = this;

        $scope.training_program_show = true;
        $scope.leaders = false;
        $scope.own_ships = false;
        $scope.route = false;
        $scope.food = false;
        $scope.bath = false;

    }
})();
