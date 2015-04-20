describe('TopicsService', function() {
	beforeEach(module('wordCloudApp'));

	var service;
	var $httpBackend;

	beforeEach(inject(function($injector){
		service = $injector.get('TopicsService');
		// Set up the mock http service responses
     	$httpBackend = $injector.get('$httpBackend');
	}));

	describe('getTopics', function() {
		var URL = 'statics/topics.json';

		it('should call the right endpoint', function() {
			$httpBackend.when('GET', URL).respond('foo');
			$httpBackend.expectGET(URL);
			service.getTopics();
			$httpBackend.flush();
		});
	});
});