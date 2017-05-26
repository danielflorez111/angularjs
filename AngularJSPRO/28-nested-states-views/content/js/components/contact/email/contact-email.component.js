var contactEmail = {
    template: `
        <div>Email: daniel.florez@yuxiglobal.com</div>
    `
};

angular
    .module("contact")
    .component("contactEmail", contactEmail)
    .config(function($stateProvider){
        $stateProvider
            .state("email", {
                parent: "contact",
                url: "^/email",
                component: "contactEmail"
            });
    });