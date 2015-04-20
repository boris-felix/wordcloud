/**
 * Description directive
 */
app.directive('description', function($rootScope) {
	/**
	 * Watching topic field updates
	 * @param scope
	 * @param element
	 * @param attr
	 */
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