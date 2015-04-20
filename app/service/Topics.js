app.factory('TopicsService', ['BaseService', '$http', function(BaseService, $http) {
	return {
		getTopics: function() {
			return BaseService.get('statics/topics.json');
		}
	};
}]);