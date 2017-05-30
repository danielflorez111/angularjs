var inbox = {
    template: `
        <div>Email: daniel.florez@yuxiglobal.com</div>
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
                component: "inbox"
            });
    });