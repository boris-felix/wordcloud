describe('BaseCtrl', function() {
	beforeEach(module('wordCloudApp'));

	var $controller;

	beforeEach(inject(function($injector){
		$controller = $injector.get('$controller');
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