app.factory('TopicsService', function($http) {
	return {
		getTopics: function() {
			return $http.get('statics/topics.json');
		}
	}
});