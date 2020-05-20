
		App.controller('myCtrl', function($scope) {
			$scope.firstName = "";
			$scope.lastName = "";
			$scope.nationality = "";
			$scope.service = "";
			
			var employees = [
				{education:"Bachelors",location:"India",hobbies:"EDM",details:"India"}
			];
			
			$scope.employees = employees;
		});
		
		App.controller('validateCtrl', function($scope) {
         $scope.user = "";
         $scope.email = "";
        });
		