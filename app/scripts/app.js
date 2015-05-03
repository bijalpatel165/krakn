'use strict';

/**
 * @ngdoc overview
 * @name 01kraknApp
 * @description
 * # 01kraknApp
 *
 * Main module of the application.
 */
angular
  .module('kraknApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      });
  });
