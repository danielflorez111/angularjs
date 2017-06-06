function Service($http) {
	this.getData = function () {
		return $http
			.get('https://httpbin.org/delay/3')
			.then(function (res) {
				return res.data;
			});
	};
}

angular
	.module('home')
	.service('Service', Service);
