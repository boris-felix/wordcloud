app.factory('TopicsService', ['BaseService', function(BaseService, $http) {
	return {
		getTopics: function() {
			return BaseService.get('statics/topics.json');
		}
	}
}]);