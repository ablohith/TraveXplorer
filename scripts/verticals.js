App.controller('verticalctrl', function($scope, hexafy) {
    $scope.vertical = [
        'Insurance',
        'Banking & Financial Services',
        'Retail',
        'Logistics',
        'Defense',
        'ISV',
        'R&D'
    ];
	
	 $scope.hex = hexafy.myFunc(220);
	
});

App.service('hexafy', function() {
    this.myFunc = function (x) {
        return x.toString(2);
    }
});