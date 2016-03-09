(function() {
  'use strict';

  angular
    .module('iq')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
