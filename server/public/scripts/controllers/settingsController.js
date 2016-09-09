colorBlocks.controller('SettingsController', ['$scope', 'DataFactory', function($scope, DataFactory) {
  console.log("settings controller running");

  $scope.addColors = DataFactory.newColors;
  $scope.addColor = DataFactory.addColor;

}]);
