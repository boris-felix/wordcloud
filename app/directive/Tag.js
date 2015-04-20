/**
 * Tag directive. Each word in the cloud can be managed by itself
 */
app.directive('tag', function($rootScope) {
	var POSITIVE_LIMIT = 60;
	var NEGATIVE_LIMIT = 40;
	// Total number size words can have into the cloud
	var NB_SIZE = 6;

	/**
	 * On a click event over a tag in the cloud
	 * @param scope
	 */
	this.onTagClick = function(scope) {
		$rootScope.currentTopic = scope.topic;
		// Force the rootScope to watch the updates over the topic field
		$rootScope.$digest();
	}

	/**
	 * Called every time the sizeCls field of a topic is updated
	 * @param scope
	 */
	this.onSizeClsUpdate = function(element, sizeCls) {
		if (element) {
			element.addClass(sizeCls);
		}
	}

	/**
	 * Listen to events related to each words in the cloud
	 * @param scope
	 * @param element
	 */
	this.listenEvents = function(scope, element) {
		element.bind('click', this.onTagClick.bind(this, scope));
		scope.$watch('topic.sizeCls', this.onSizeClsUpdate.bind(this, element));
	}

	/**
	 * Volume into the set of data are not linear. We do that to have a real mix of words sizes
	 * into the cloud.
	 * @param higherVol
	 * @param lowerVol
	 */
	this.getLevelLimits = function(higherVol, lowerVol) {
		var limits = higherVol - lowerVol;
		// The number of size is the total number of possible sizes less the higher and the lower
		// one
		var nbSize = NB_SIZE - 2;
		var intervals = limits / nbSize;
		return _.map(Array(nbSize), function(a, b) {
			return {
				volume: b * intervals + lowerVol,
				cls: 'famous-level'+(b+1)
			}
		});
	}

	/**
	 * Get the right class depending on the topic volume
	 * @param volume
	 */
	this.findSizeCls = function (volume) {
		var levelLimits = this.getLevelLimits(
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
	}

	/**
	 * Creating the sizeCls field which will be used later
	 * Note : this function have to be called here because we also need
	 * the higher and the lower volume topics of the set to determine
	 * the right class to apply to every topics
	 * @param topic
	 */
	this.applySizeCls = function(topic) {
		if (topic.id == $rootScope.higher.id) {
			topic.sizeCls = 'famous-level5';
		} else if (topic.id == $rootScope.lower.id) {
			topic.sizeCls = 'famous-level0';
		} else {
			topic.sizeCls = this.findSizeCls(topic.volume);
		}
	}

	/**
	 * Setting a class on the word depending of the topic sentiment score
	 * @param topic
	 * @param element
	 */
	this.setSentimentScoreClass = function(topic, element) {
		if (topic.sentimentScore > POSITIVE_LIMIT) {
			element.addClass('positive');
		} else if (topic.sentimentScore < NEGATIVE_LIMIT) {
			element.addClass('negative');
		}
	}

	/**
	 * Initializing a tag into the cloud
	 * @param scope
	 * @param element
	 * @param attr
	 */
	this.init = function(scope, element, attr) {
		this.listenEvents(scope, element);
		this.setSentimentScoreClass(scope.topic, element);
		this.applySizeCls(scope.topic);
	}

	return {
		link: this.init
	}
});