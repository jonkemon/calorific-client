describe('PanelController', function(){
	beforeEach(module('Shopping'));

	beforeEach(inject(function(_$rootScope_, _$controller_){
		$rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        $controller = _$controller_;

        $controller('PanelController', {'$rootScope' : $rootScope, '$scope': $scope});
    }));

	it('should have a tab value', function(){
		expect($scope.tab).toEqual(1);
	});
});