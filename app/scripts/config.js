'use strict';

/**
 * @ngdoc overview
 * @name kraknApp
 * @description
 * # kraknApp
 *
 * Config module of the application. Router definitions goes here.
 */

angular.module('kraknApp')
	.config(function ($routeProvider) {
	    $routeProvider
	      .when('/contacts', {
	        templateUrl: 'views/contact_list.html',
	        controller: 'ContactListCtrl'
	      })
	      .when('/contact/create',{
	      	templateUrl: 'views/contact_create.html',
	      	controller: 'ContactCreateCtrl'
	      });
	  });