describe('BaseCtrl', function() {
	beforeEach(module('wordCloudApp'));

	var $controller;
	var controller;

	beforeEach(inject(function(_$controller_){
		$controller = _$controller_;
		controller = $controller('BaseCtrl', { TopicsService: mockTopicsService });	
	}));

	describe('initCloud', function() {
		it('should have called mockTopicsService.getTopics', function() {
			controller.initCloud();
			expect(mockTopicsService.getTopics).toHaveBeenCalled();
		});

		it('should have onTopicsUpdate if everything is fine', function() {
			spyOn(controller, 'onTopicsUpdate');
			controller.initCloud();
			expect(controller.onTopicsUpdate).toHaveBeenCalled();
		});
	});

	describe('getHigherVolume', function() {
		it('should get the topic with higher volume', function() {
			expect(controller.getHigherVolume([{ id: 1, volume: 3 }, { id: 2, volume: 5 }])).toEqual(
				{ id: 2, volume: 5 }
			)
		});
	});

	describe('getLowerVolume', function() {
		it('should get the topic with lower volume', function() {
			expect(controller.getLowerVolume([{ id: 1, volume: 3 }, { id: 2, volume: 5 }])).toEqual(
				{ id: 1, volume: 3 }
			)
		});
	});
});