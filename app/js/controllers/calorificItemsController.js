application.controller('CalorificItemsController', ['$http', function($http) {

	var calorificStore = this;
	calorificStore.products = [];

	$http.get('app/js/data.json').success(function(data){
		calorificStore.products = data;
	})
	.error(function(err){
		console.log(err);
	})
}]);