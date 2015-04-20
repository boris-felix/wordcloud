app.directive('description', function($rootScope) {
	this.init = function(scope, element, attr) {
		$rootScope.$watch('topic', function(topic) {
			if (topic) {
				element.removeClass('hidden');
				scope.topic = topic;
			}
		});
	}

	return {
		link: this.init,
		templateUrl: 'tpl/description'
	}
});