'use strict';

/**
 * @ngdoc function
 * @name 01kraknApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the 01kraknApp
 */
angular.module('kraknApp')
  .controller('ContactListCtrl', function ($scope, Contact, $location) {
    
    $scope.fields = ['firstName', 'lastName'];
    $scope.contacts = Contact.query();

    $scope.sort = function(field){
    	$scope.sort.field = field;
    	$scope.sort.order = !$scope.sort.order;
    };

    //Default Intialisation
    $scope.sort.field = 'firstName';
    $scope.sort.order = false;

    //Event bindings
    $scope.createContact = function(){
        $location.url('/contact/create');
    };
  })

  .controller('ContactCreateCtrl', function($scope, Contact, $location){
    
    $scope.contact = new Contact({
        firstName:  ['', 'text'],
        lastName:   ['', 'text'],
        email:      ['', 'email'],
        homePhone:  ['', 'tel'],
        cellPhone:  ['','tel'],
        birthday:   ['', 'date'],
        website :   ['', 'url'],
        address:    ['', 'text']
    });

    $scope.save = function(){
        if($scope.contactForm.$invalid){
            $scope.$broadcast('record.invalid');
        } else{
            $scope.contact.$save();
            $location.url('/contacts');
        }
    };
  });
