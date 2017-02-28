
(function () {
    'use strict';

    angular
        .module('flot')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController() {
        var vm = this;
        // vm.changeLanguage = function (key) {
        //   $translate.use(key);
        // };

        vm.slider = {
            value: 10
        };

        console.log('main works');
        vm.page = 'main';

    }
})();
