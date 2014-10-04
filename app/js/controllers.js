'use strict';

var m = angular.module('phonecatControllers', []);

m.controller('PhoneListCtrl', ['$scope', '$http', function($scope, $http){
  $http.get('phones/phones.json').success(function(data){
    $scope.phones = data;
  });
  $scope.orderProp = 'age';
}]);

m.controller('PhoneDetailCtrl', function(){});

