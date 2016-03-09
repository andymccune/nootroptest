(function() {
  'use strict';

  angular
    .module('iq')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'app/templates/home.html',
          controller: 'homeCtrl'
        })
        .state('test', {
          url: '/test',
          templateUrl: 'app/templates/test.html',
          controller: 'testCtrl'
        })
        .state('results', {
          url: '/results',
          templateUrl: 'app/templates/results.html',
          controller: 'resultsCtrl'
        });

      $urlRouterProvider.otherwise('/');
    }])
    .run(['$rootScope', function($rootScope){
      $rootScope.results = []
    }])

})();
