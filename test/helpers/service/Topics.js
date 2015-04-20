var mockTopicsService = jasmine.createSpyObj('TopicsService', ['getTopics']);
mockTopicsService.getTopics.and.returnValue({
	then: function(callback) {
		return callback('foo');
	}
});