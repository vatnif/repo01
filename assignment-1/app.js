(function(){
'use strict';

angular.module('LunchCheck',[])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];	

function LunchCheckController($scope){
	$scope.message = "";
	
	$scope.checkLunch = function(){
		var count = countLunchItems($scope.lunchItems);
		if (count == 0){
			$scope.message = "Please enter data first";
		} else if (count <= 3){
			$scope.message = "Enjoy!";
		} else {
			$scope.message = "Too much!";
		}
	};
	
	function countLunchItems(items){
		if (items != null && items.length > 0){
			return items.split(',').length;
		} else {
			return 0;
		}
	}
}

})();