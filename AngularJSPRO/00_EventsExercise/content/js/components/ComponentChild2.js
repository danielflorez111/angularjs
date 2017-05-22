var componentChild2 = {
    // require: {
    //     parent: '^^componentParent'
    // },
    bindings: {
        user: "<"
    },
    controller: function ($scope) {
        var ctrl = this;
        $scope.$on("successToChild", function(event, data){
            console.log("Child: " + data);
            ctrl.success = data;
        });
    },
    template: `
        <label>{{$ctrl.user.name}}</label>
        <label>{{$ctrl.user.lastName}}</label>
        <div contenteditable>{{$ctrl.success}}</div>
    `
};

angular
	.module('app')
	.component('componentChild2', componentChild2);