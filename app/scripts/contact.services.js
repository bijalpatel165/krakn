'use strict';

angular.module('kraknApp')
	.factory('Contact', function($resource){
		return $resource ('/05ConnectMe/contacts/:id',{
			id: '@id'
		});
	});