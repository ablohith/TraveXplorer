
App.controller('clientctrl', function($scope, $http) {

   $http.get("http://www.w3schools.com/angular/customers_mysql.php")
   .then(function (response) {$scope.names = response.data.records;
   });
});