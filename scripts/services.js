var App = angular.module("mainApp", []);
         
         App.controller('studentController', function($scope) {
            $scope.Web = {
               Web:[
                  {name:'Simple-Web-Server'},
                  {name:'Web Services Interoperability Technology'},
                  {name:'Web Services Invocation Framework'}
               ] 
            };
			
			$scope.Testing = {
                Testing: [
                  {name:'Acceptance Testing'},
                  {name:'Compatibility Testing'},
                  {name:'Integration Testing'}
               ] 
                };
			
			$scope.Database = {
                Database: [
                  {name:'Microsoft SQL Server'},
                  {name:'Oracle'},
                  {name:'Sybase'}
               ]
                };
			
			$scope.Mobile = {
                Mobile: [
                  {name:'iOS'},
                  {name:'Android'},
                  {name:'Windows'}
               ]
                };
			
			$scope.Cloud = {
                Cloud: [
                  {name:'GitHub'},
                  {name:'IBM'},
                  {name:'Red Hat'}
               ]
                };
			
			$scope.Network = {
                Network: [
                  {name:'Cisco'},
                  {name:'Juniper'},
                  {name:'VMWare'}
               ]
                };
			
			$scope.Erp = {
                Erp: [
                  {name:'Cisco'},
                  {name:'Juniper'},
                  {name:'VMWare'}
               ]
                };
			
			$scope.Digital = {
                Digital: [
                  {name:'Cisco'},
                  {name:'Juniper'},
                  {name:'VMWare'}
               ]
                }
         });