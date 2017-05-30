var create = {
    template: `
        <div>Phone: 321 752 8197</div>
    `
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