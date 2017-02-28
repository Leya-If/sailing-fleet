
(function () {
    'use strict';

    angular
        .module('flot')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController() {
        var vm = this;

        vm.page = 'main';

    }
})();
