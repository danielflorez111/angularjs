function HTMLController() {
	this.reset = function () {
		this.content = 'HOla';
	};
}

angular
	.module('app')
	.controller('HTMLController', HTMLController);
