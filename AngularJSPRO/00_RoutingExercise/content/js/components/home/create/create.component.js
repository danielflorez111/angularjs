var create = {
    template: `
        <div>Phone: 321 752 8197</div>

        		<div>
			Filter by:
			<a href="" ng-click="position = undefined">All</a>
			<a href="" ng-click="position = 'boss'">Boss</a>
			<a href="" ng-click="position = 'coworker'">Coworker</a>
			<ul>
				<li ng-repeat="player in $ctrl.players | position:position" ng-class="{
					boss : player.position === 'boss',
					coworker : player.position === 'coworker'
				}">
					<p>
						{{ player.name }}
						<span>{{ player.position }}</span>
					</p>
				</li>
			</ul>
			
		</div>
    `,
    controller: function() {
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
};

angular
    .module("home")
    .component("create", create)
    .config(function($stateProvider){
        $stateProvider
            .state("create", {
                parent: "home",
                url: "^/create",
                component: "create"
            });
    });