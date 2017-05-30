function FilterController() {
	this.players = [{
		name: 'Bart Simpson',
		position: 'coworker'
	},{
		name: 'Seymour Skinner',
		position: 'boss'
	},{
		name: 'Homero Simpson',
		position: 'coworker'
	},{
		name: 'Moe Szyslak',
		position: 'coworker'
	}];
}

angular
	.module('app')
	.controller('FilterController', FilterController);
