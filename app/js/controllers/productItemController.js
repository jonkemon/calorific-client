application.controller('ProductItemController', ['$rootScope', '$scope', function($rootScope, $scope) {
	$scope.tab = 1;

	$scope.selectTab = function(setTab) {
		$scope.tab = setTab;
	};

	$scope.isSelected = function(selectedTab) {
		return $scope.tab === selectedTab;
	}
}]);