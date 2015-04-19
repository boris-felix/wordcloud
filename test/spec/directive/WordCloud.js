describe('WordCloud directive', function() {
	beforeEach(module('wordCloudApp'));

	var $compile;
	var $rootScope;

	beforeEach(inject(function($injector){
		$compile = $injector.get('$compile');
		$rootScope = $injector.get('$rootScope');
	}));

	describe('Init', function() {
		it('should initialize correctly the directive', function() {
			var element = $compile("<word-cloud></word-cloud>")($rootScope);
			console.log(element);
		});
	});
});