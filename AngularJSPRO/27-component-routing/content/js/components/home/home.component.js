var home = {
	template: `
		<div class="home">Home Page Daniel</div>
	`
};

angular
	.module("home")
	.component("home", home)
	.config(function($stateProvider, $urlRouterProvider){
		$stateProvider
			.state("home", {
				url: "/",
				component: "home"
			})
		$urlRouterProvider.otherwise("/");
	});