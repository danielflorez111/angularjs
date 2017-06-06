var create = {
    template: `
		<div>

			<button class="button button5" ng-click="position = undefined">ALL</button>
			<button class="button button2" ng-click="position = 'boss'">BOSS</button>
			<button class="button button3" ng-click="position = 'coworker'">COWORKER</button>

			<ul>
				<li ng-repeat="employee in $ctrl.employees | position:position" ng-class="{
					boss : employee.position === 'boss',
					coworker : employee.position === 'coworker'
				}">
					<p>
						{{ employee.name }}
						<span>{{ employee.position }}</span>
					</p>
				</li>
			</ul>
		</div>
    `,
    controller: function($transitions) {
		this.employees = [{
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

		this.uiCanExit = function () {
			console.log('Exiting...');
			return window.confirm('Are you sure you want to leave?');
		};
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