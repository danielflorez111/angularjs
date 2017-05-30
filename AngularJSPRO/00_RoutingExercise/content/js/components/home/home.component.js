var home = {
    template: `
        <div class="contact">
            <div class="contact-methods">
                <div>
			        <ul>
				        <li>
					        <a href="#/create">CREATE</a>
				        </li>
				        <li>
					        <a href="#/inbox">INBOX</a>
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