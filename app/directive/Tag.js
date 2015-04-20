/**
 * Tag directive. Each word in the cloud can be managed by itself
 */
app.directive('tag', function($rootScope) {
	var POSITIVE_LIMIT = 60;
	var NEGATIVE_LIMIT = 40;

	this.listenEvents = function(scope, element) {
		element.bind('click', function() {
			$rootScope.topic = scope.topic;
			// Force the rootScope to watch the updates over the topic field
			$rootScope.$digest();
		});
	}

	this.initTag = function(topic, element) {
		if (topic.sentimentScore > POSITIVE_LIMIT) {
			element.addClass('positive');
		} else if (topic.sentimentScore < NEGATIVE_LIMIT) {
			element.addClass('negative');
		}
	}

	this.init = function(scope, element, attr) {
		this.listenEvents(scope, element);
		this.initTag(scope.topic, element);
	}

	return {
		link: this.init
	}
});