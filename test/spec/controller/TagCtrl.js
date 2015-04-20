describe('TagCtrl', function() {
	beforeEach(module('wordCloudApp'));

	var $controller;
	var controller;
	var $rootScope;
	var $scope;
	var element;

	beforeEach(inject(function(_$controller_, _$rootScope_, $compile){
		$controller = _$controller_;
		$rootScope = _$rootScope_;
		$scope = $rootScope.$new();
		controller = $controller('TagCtrl', { $scope: $scope});
	}));

	describe('onTagClick', function() {
		it('should set rootScope.currentTopic', function() {
			$scope.topic = 'foo';
			$scope.onTagClick();
			expect($rootScope.currentTopic).toEqual('foo');
		});

		it('should call rootScope.$digest', function() {
			spyOn($rootScope, '$digest');
			$scope.onTagClick();
			expect($rootScope.$digest).toHaveBeenCalled();
		});
	});

	describe('getLevelLimits', function() {
		it('should return  a range of correct size', function() {
			expect($scope.getLevelLimits(100, 2)).toEqual([
				{ volume : 2, cls : 'famous-level1' },
				{ volume : 26.5, cls : 'famous-level2' },
				{ volume : 51, cls : 'famous-level3' },
				{ volume : 75.5, cls : 'famous-level4' }
			]);
		});
	});

	describe('findSizeCls', function() {
		it('should return the name of the class depending of the related volume of the topic', function() {
			$rootScope.higher = { volume: 100 };
			$rootScope.lower = { volume: 2 };
			expect($scope.findSizeCls(10)).toEqual('famous-level1');
			expect($scope.findSizeCls(30)).toEqual('famous-level2');
			expect($scope.findSizeCls(53)).toEqual('famous-level3');
			expect($scope.findSizeCls(80)).toEqual('famous-level4');
		});
	});
});