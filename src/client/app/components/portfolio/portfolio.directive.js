(function() {

  'use strict';

  angular.module('davethedev').directive('portfolio', function() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/portfolio/portfolio.view.html',
    }
  });

})();