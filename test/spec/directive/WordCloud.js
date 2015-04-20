describe('WordCloud directive', function() {
	beforeEach(module('wordCloudApp'));

	var $compile;
	var $rootScope;
	var element;
	var $http;
	var $scope;

	beforeEach(inject(function(_$compile_, _$rootScope_, _$httpBackend_){
		$compile = _$compile_;
		$rootScope = _$rootScope_;
		$http = _$httpBackend_
		$scope = $rootScope.$new();
	}));

	it('should initialize by calling the right template', function() {
		var url = 'tpl/wordcloud';
		$http.when('GET', url).respond('foo');
		element = $compile("<word-cloud></word-cloud>")($rootScope);
		$http.expectGET(url);
	});
});