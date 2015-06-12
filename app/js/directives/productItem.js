application.directive('productItem', function() {
	return {
		restrict: 'E',
		templateUrl: 'app/js/templates/product-item.html',
		controller: 'ProductItemController'
	}
});