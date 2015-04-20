describe('WordCloud directive', function() {
	beforeEach(module('wordCloudApp'));

	var $compile;
	var $rootScope;
	var element;

	beforeEach(inject(function(_$compile_, _$rootScope_){
		$compile = _$compile_;
		$rootScope = _$rootScope_;
	}));

	describe('Init', function() {
		it('should initialize correctly the directive', function() {
			$rootScope.topics = [
				{ id: 1, label: 'foo' },
				{ id: 2, label: 'bar' }
			]
			element = $compile("<word-cloud></word-cloud>")($rootScope);
			// Fire watch events
			$rootScope.$digest();
			expect(element.html()).toEqual('bar');
		});
	});
});