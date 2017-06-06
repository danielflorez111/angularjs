var inbox = {
	bindings: {
		data: '<'
	},
    template: `
        <pre> {{ $ctrl.data | json }} </pre>
    `
};

angular
    .module("home")
    .component("inbox", inbox)
    .config(function($stateProvider){
        $stateProvider
            .state("inbox", {
                parent: "home",
                url: "^/inbox",
                component: "inbox",
				resolve: {
					data: function (Service) {
						return Service.getData();
					}
				}
            });
    });