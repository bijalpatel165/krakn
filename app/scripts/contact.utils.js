'use strict';

angular.module('kraknApp')
	.value('FieldTypes',{
		text 	: ['Text', 'should be text'],
		email 	: ['Email', 'should be an email address'],
		number	: ['Number', 'should be a number'],
		date	: ['Date', 'should be a date'],
		datetime: ['DateTime', 'should be a datetime'],
		time 	: ['Time', 'should be a time'],
		month 	: ['Month', 'should be a month'],
		week	: ['Week', 'should be a week'],
		url		: ['URL', 'should be a url'],
		tel		: ['Phone Number', 'should be a phone number'],
		color	: ['Color', 'should be a color']
	});