app.factory('BaseService', function($http, $q) {
	return {
		get: function(url) {
			var deferred = $q.defer();
			$http.get(url).then(
				function(result){
					deferred.resolve(result.data);
				},
				function(){
					deferred.reject(false);
				}
			);
			return deferred.promise;
		}
	}
});