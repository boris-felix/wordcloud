/**
 * Tag directive. Each word in the cloud can be managed by itself
 */
app.directive('tag', ['$rootScope', function($rootScope) {
	return {
		controller: 'TagCtrl',
		/**
		 * Initializing a tag into the cloud
		 * @param scope
		 * @param element
		 * @param attr
		 */
		link: function(scope, element, attr) {
			// The next set of called method are here because we have to wait
			// the directive to be compiled before listening to click events 
			// and modifying the DOM
			scope.listenEvents(scope, element);
			scope.setSentimentScoreClass(scope.topic, element);
			scope.applySizeCls(scope.topic);
		}
	};
}]);