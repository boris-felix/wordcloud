/**
 * Word cloud directive
 */
app.directive('wordCloud', function() {
	/**
	 * Updating the word cloud every time the topics list change
	 * @param scope
	 * @param element
	 * @param attr
	 */
	this.updateCloud = function(scope, element) {
		scope.$watch('topics', function(topics){
			_.each(topics, function(topic) {
				element.text(topic.label);
			})
		});
	}

	return {
		link: this.updateCloud
	};
});