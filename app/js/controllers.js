'use strict';

var phonecatControllers = angular.module('phonecatControllers', []);

function PhoneListCtrl($scope, $http) {
  $http.get('phones/phones.json').success(function(data){
    $scope.phones = data;
  });
  $scope.orderProp = 'age';
}

function PhoneDetailCtrl($scope, $routeParams, $http) {
  $http.get('phones/' + $routeParams.phoneId + '.json')
    .success(function(data){
    $scope.phone = data;
  });
}

phonecatControllers.controller('PhoneListCtrl', ['$scope', '$http', PhoneListCtrl]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', '$http', PhoneDetailCtrl]);









