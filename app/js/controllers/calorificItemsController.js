application.controller('CalorificItemsController', ['$http', function($http) {

	var shop = this;
	shop.products = [];

	$http.get('app/js/data.json').success(function(data){
		shop.products = data;
	})
	.error(function(err){
		console.log(err);
	})
}]);