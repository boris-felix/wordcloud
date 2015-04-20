app.factory('TopicsCollection', function($rootScope) {
	var collection = this;

	$rootScope.$watch('topics', function(topics) {
		collection.topics = topics;
	});

	this.getTopicById = function(id) {
		return _.find(collection.topics, function(topic) {
			return topic.id == id;
		});
	}
});