(function() {
  'use strict';

  angular
    .module('iq')
    .directive('navbar', function() {
      return {
        restrict: 'E',
        scope: {},
        controller: 'navbarCtrl',
        templateUrl: 'app/templates/tmpl-navbar.html'
      };
    })
    .directive('footer', function() {
      return {
        restrict: 'E',
        replace: true,
        scope: {},
        // controller: 'footerCtrl',
        templateUrl: 'app/templates/tmpl-footer.html'
      };
    })
})();
