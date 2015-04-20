/**
 * Description directive
 */
app.directive('description', function($rootScope) {
	/**
	 * Set current topic to the local scope
	 * @param scope
	 * @param topic
	 */
	this.setCurrentTopic = function(scope, topic) {
		if (topic) {
			scope.topic = topic;
		}
	}

	/**
	 * Watching topic field updates
	 * @param scope
	 * @param element
	 * @param attr
	 */
	this.init = function(scope, element, attr) {
		$rootScope.$watch('currentTopic', this.setCurrentTopic.bind(this, scope));
	}

	return {
		link: this.init,
		templateUrl: 'tpl/description'
	}
});