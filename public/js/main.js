

// Declare app level module which depends on filters, and services
angular.module('App').
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    //$routeProvider.when('/#feature', {templateUrl: 'partials/test1', controller: MyCtrl1});
    //$routeProvider.when('/#graph', {templateUrl: 'partials/test2', controller: MyCtrl2});
    //$routeProvider.otherwise({redirectTo: '/#feature'});
    $locationProvider.html5Mode(true);
  }]);

