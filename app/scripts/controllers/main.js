'use strict';

angular.module('hiringCostsEcuadorApp')
  .controller('MainCtrl', function ($scope, SalaryCostService, MinimumSalary) {
    $scope.salary = MinimumSalary;
    $scope.minimum = MinimumSalary;
    $scope.concepts = [];
    $scope.calculate = function() {
      $scope.concepts = SalaryCostService.calculate($scope.salary);
    };
    $scope.calculate();
  });
