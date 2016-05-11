(function() {

  'use strict';

  angular.module('davethedev', ['ui.router', 'angular-refills']);

  angular.module('davethedev').config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('landing', {
      url: '/home',
      template: '<landing></landing>'
    })
    .state('landing.full', {
      url:'/home/full',
      template: '<landingfull></landingfull>'
    })
    .state('portfolio', {
      url: '/portfolio',
      template: '<portfolio></portfolio>'
    });
  });
})();
