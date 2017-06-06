var home = {
    template: `
        <div class="contact">
            <div class="contact-methods">
                <div>
			        <ul>
				        <li ui-sref-active="active">
					        <a ui-sref="create">CREATE</a>
				        </li>
				        <li ui-sref-active="active">
					        <a ui-sref="inbox">INBOX</a>
				        </li>
			        </ul>
		        </div>
            </div>     
            <div class="contact-details" ui-view></div>
        </div>
    `
};

angular
    .module("home")
    .component("home", home)
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state("home", {
                redirectTo: "create",
                url: "/",
                component: "home"
            });
            $urlRouterProvider.otherwise('/');
    });