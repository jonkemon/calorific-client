application.directive('calorificItems', function(){
	return {
		restrict: 'E',
		templateURL: 'app/js/templates/calorific-items.html',
		controllerAs: 'app/js/controllers/calorificItemsController.js'
	}
});