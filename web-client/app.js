'use strict';

// Our Yii2 rest api url
var productBase = 'http://localhost/Southwell/web-service/web/'
// Declare app level module which depends on views, and components
var spaApp = angular.module('spaApp', [
  'ngRoute',
  'ngCart',
  'ngAnimate',
  'ngSanitize',
  'ui.bootstrap',
  'spaApp.site',
  'spaApp.shop',
]);
var spaApp_site = angular.module('spaApp.site', ['ngRoute'])
var spaApp_shop = angular.module('spaApp.shop', ['ngRoute']);

spaApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/shop/index'});
}]);