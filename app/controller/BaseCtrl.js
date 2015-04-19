/**
 * Main Controller
 */
app.controller('BaseCtrl', ['TopicsService', '$rootScope', function(TopicsService, $rootScope) {
    /**
     * Initializing the word cloud
     */
    this.initCloud = function() {
        TopicsService.getTopics().then(function(result) {
            $rootScope.topics = result.topics;
        });
    }

    this.initCloud();
}]);