describe('BaseCtrl', function() {
	beforeEach(module('wordCloudApp'));

	var $controller;

	beforeEach(inject(function($injector){
		$controller = $injector.get('$controller');
	}));

	describe('initCloud', function() {
		var controller;

		beforeEach(function() {
			controller = $controller('wordCloudCtrl', { APIService: mockAPIService });	
		});

		it('should have called mockAPIService.getTopics', function() {
			controller.initCloud();
			expect(mockAPIService.getTopics).toHaveBeenCalled();
		});
	});
});