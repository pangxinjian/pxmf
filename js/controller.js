

var appcontroller = angular.module('appcontroller',[]);
appcontroller.controller('mycontroller',['$scope',function($scope){
		$scope.show = true;
		$scope.hide = false;
		$scope.index = 1;
		$scope.taba = function(item){
			$scope.show = true;
			$scope.hide = false;
			$scope.index = item;
		}
		$scope.tabb = function(item){
			$scope.show = false;
			$scope.hide = true;
			$scope.index = item;
		}
		
		
		$scope.zt = [];
		$scope.sq = function(){
			$scope.zt = 1;
			//alert(1);
			
		}
	}]);