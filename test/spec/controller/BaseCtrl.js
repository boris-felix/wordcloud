describe('BaseCtrl', function() {
	beforeEach(module('wordCloudApp'));

	var $controller;

	beforeEach(inject(function(_$controller_){
		$controller = _$controller_;
	}));

	describe('initCloud', function() {
		var controller;

		beforeEach(function() {
			controller = $controller('BaseCtrl', { TopicsService: mockTopicsService });	
		});

		it('should have called mockTopicsService.getTopics', function() {
			controller.initCloud();
			expect(mockTopicsService.getTopics).toHaveBeenCalled();
		});
	});
});