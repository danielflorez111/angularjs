var contact = {
    template: `
        <div class="contact">
            Contact Page
            <div class="tabs">
                <a href="#/phone">Phone</a>
                <a href="#/email">Email</a>
            </div>     
            <div ui-view></div>
        </div>
    `
};

angular
    .module("contact")
    .component("contact", contact)
    .config(function($stateProvider){
        $stateProvider
            .state("contact", {
                redirectTo: "phone",
                url: "/contact",
                component: "contact"
            });
    });