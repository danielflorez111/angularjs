var contactPhone = {
    template: `
        <div>Phone: 321 752 8197</div>
    `
};

angular
    .module("contact")
    .component("contactPhone", contactPhone)
    .config(function($stateProvider){
        $stateProvider
            .state("phone", {
                parent: "contact",
                url: "^/phone",
                component: "contactPhone"
            });
    });