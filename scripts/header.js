App.controller('headerctrl', function($scope, $timeout) {
  $scope.myHeader = "EVRY";
  $timeout(function () {
      $scope.myHeader = "Welcome to EVRY";
  }, 2000);
});