/**
 * Main Controller
 */
app.controller('BaseCtrl', ['TopicsService', function(TopicsService, $scope) {
    this.initCloud = function() {
        TopicsService.getTopics().then(function(topics) {
            
        });
    }

    this.initCloud();
}]);