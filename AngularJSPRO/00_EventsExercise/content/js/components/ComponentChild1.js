var componentChild1 = {
    bindings: {
        user: "<",
        onUpdate: "&"
    },
    controller: function ($scope) {
        this.$onChanges = function (changes) {
            if(changes.user) {
                this.user = angular.copy(this.user);
            }             
        };

        this.update = function(){
            this.onUpdate({
                $event:{
                    user : this.user
                }
            })    

            $scope.$emit("success", "Success");        
        };
    },
    template: `
    <form novalidate name="form" ng-submit="$ctrl.update()">

        <input name="name" type="text" ng-model="$ctrl.user.name" required="required"/>
        <input name="lastName" type="text" ng-model="$ctrl.user.lastName" required="required"/>

		<div
			ng-if="form.name.$error.required"
			ng-messages="form.name.$error">
			<div ng-message="required">
				Name is required!
			</div>
		</div>

		<div
			ng-if="form.lastName.$error.required"
			ng-messages="form.lastName.$error">
			<div ng-message="required">
				Lastname is required!
			</div>
		</div>

        <button type="submit">Update</button>
    </form>
    `
};

angular
	.module('app')
	.component('componentChild1', componentChild1);