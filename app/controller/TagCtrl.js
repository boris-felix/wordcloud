/**
 * Tag directive controller
 */
app.controller('TagCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
	var POSITIVE_LIMIT = 60;
	var NEGATIVE_LIMIT = 40;
	// Total number size words can have into the cloud
	var NB_SIZE = 6;

	/**
	 * On a click event over a tag in the cloud
	 */
	$scope.onTagClick = function() {
		// This way the description directive can have access to this topic
		$rootScope.currentTopic = $scope.topic;
		// Force the rootScope to watch the updates over the topic field
		$rootScope.$digest();
	};

	/**
	 * Called every time the sizeCls field of a topic is updated
	 * @param scope
	 */
	$scope.onSizeClsUpdate = function(element, sizeCls) {
		if (element) {
			element.addClass(sizeCls);
		}
	};

	/**
	 * Volume into the set of data are not linear. We do that to have a real mix of words sizes
	 * into the cloud.
	 * @param higherVol
	 * @param lowerVol
	 */
	$scope.getLevelLimits = function(higherVol, lowerVol) {
		// Defining the limit of the range of possible size
		var limits = higherVol - lowerVol;
		// The number of size is the total number of possible sizes less both the higher and the lower
		var nbSize = NB_SIZE - 2;
		// Then creating a linear scale
		var intervals = limits / nbSize;
		return _.map(Array(nbSize), function(a, b) {
			return {
				volume: b * intervals + lowerVol,
				cls: 'famous-level'+(b+1)
			};
		});
	};

	/**
	 * Get the right class depending on the topic volume
	 * @param volume
	 */
	$scope.findSizeCls = function (volume) {
		var levelLimits = $scope.getLevelLimits(
			$rootScope.higher.volume, 
			$rootScope.lower.volume
		);
		var cls;

		_.find(levelLimits.reverse(), function(limit) {
			if (volume >= limit.volume) {
				cls = limit.cls;
				// We break the loop
				return true;
			}
		});

		return cls;
	};

	/**
	 * Listen to events related to each words in the cloud
	 * @param scope
	 * @param element
	 */
	$scope.listenEvents = function(scope, element) {
		element.bind('click', $scope.onTagClick.bind(this));
		scope.$watch('topic.sizeCls', $scope.onSizeClsUpdate.bind(this, element));
	};

	/**
	 * Setting a class on the word depending of the topic sentiment score
	 * @param topic
	 * @param element
	 */
	$scope.setSentimentScoreClass = function(topic, element) {
		if (topic.sentimentScore > POSITIVE_LIMIT) {
			element.addClass('positive');
		} else if (topic.sentimentScore < NEGATIVE_LIMIT) {
			element.addClass('negative');
		}
	};

	/**
	 * Creating the sizeCls field which will be used later
	 * Note : this function have to be called here because we also need
	 * the higher and the lower volume topics of the set to determine
	 * the right class to apply to every topics
	 * @param topic
	 */
	$scope.applySizeCls = function(topic) {
		if (topic.id == $rootScope.higher.id) {
			topic.sizeCls = 'famous-level5';
		} else if (topic.id == $rootScope.lower.id) {
			topic.sizeCls = 'famous-level0';
		} else {
			topic.sizeCls = $scope.findSizeCls(topic.volume);
		}
	};
}]);