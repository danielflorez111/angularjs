var componentParent = {
    controller: function ($scope) {
        this.user = {
            name: 'Marcos',
            lastName: 'Looser'
        };

        this.update = function (event) {
            this.user = event.user;
        };
        
        $scope.$on("success", function(event, data) {
            console.log("Parent: " + data);
            $scope.$broadcast("successToChild", data);
        });
    },
    template: `
        <input format type="text" ng-model="$ctrl.user.name" />
        <input format type="text" ng-model="$ctrl.user.lastName" />

        <span> Name: {{ $ctrl.user.name }} Last Name: {{ $ctrl.user.lastName }} </span> <br>
        <component-child1 user="$ctrl.user" on-update="$ctrl.update($event)"></component-child1> <br>
        <component-child2 user="$ctrl.user"></component-child2>
    `
};

angular
	.module('app')
	.component('componentParent', componentParent);