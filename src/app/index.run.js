(function() {
  'use strict';

  angular
    .module('flot')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
