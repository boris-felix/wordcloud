/**
 * Main Controller
 */
app.controller('BaseCtrl', ['TopicsService', '$rootScope', function(TopicsService, $rootScope) {
    /**
     * Get the more popular topic
     * @param topics
     */
    this.getHigherVolume = function(topics) {
        return _.max(topics, function(topic) {
            return topic.volume;
        });
    }

    /**
     * Get the less popular topic
     * @param topics
     */
    this.getLowerVolume = function(topics) {
        return _.min(topics, function(topic) {
            return topic.volume;
        });
    }

    this.onTopicsUpdate = function(result) {
        $rootScope.higher = this.getHigherVolume(result.topics);
        $rootScope.lower = this.getLowerVolume(result.topics);
        $rootScope.topics = result.topics;
    }

    /**
     * Initializing the word cloud
     */
    this.initCloud = function() {
        TopicsService.getTopics().then(this.onTopicsUpdate.bind(this));
    }

    this.initCloud();
}]);