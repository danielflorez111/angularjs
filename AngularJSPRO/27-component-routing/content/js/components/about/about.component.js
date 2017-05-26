var about = {
	template: `
		<div class="about">About Florez Salgado</div>
	`
};

angular
	.module("about")
	.component("about", about)
	.config(function($stateProvider){
		$stateProvider
			.state("about", {
				url: "/about",
				component: "about"
			});
	});