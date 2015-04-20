app.directive('tag', function($rootScope) {
	this.init = function(scope, element, attr) {
		element.bind('click', function() {
			$rootScope.topic = scope.topic;
			$rootScope.$digest();
		});
	}

	return {
		link: this.init
	}
});