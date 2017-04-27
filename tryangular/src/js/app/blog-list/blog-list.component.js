'use strict';

angular.module('blogList').
	component('blogList', {
		//template: "<div class=''><h1 class='new-class'>{{ title }}</h1><button ng-click='someClickTest()''>Click me!</button></div>",
		templateUrl: './templates/blog-list.html',
		controller: function($scope) {
			var blogItems = [
				{title: "Book", id:1, description: "This is a book"},
				{title: "Car", id:2, description: "This is a car"},
				{title: "House", id:3, description: "This is a house"},
				{title: "Computer", id:4, description: "This is a computer"},
			]

			$scope.items = blogItems;

			$scope.title = "Hi there";
			$scope.clicks = 0;

			$scope.someClickTest = function() {
				console.log("Clicked");
				$scope.clicks += 1 
				$scope.title = "Clicked " + $scope.clicks + " times";
			}

		}
	});
