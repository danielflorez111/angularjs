function format() {
	return {
		require: 'ngModel',
		link: function ($scope, $elem, $attrs, $ctrl) {

			var ngModelCtrl = $ctrl;

			ngModelCtrl.$formatters.unshift(function (value) {                
                var i = 0;
                var newValue = "";
                
                while (i < value.length) {
                    if (value[i] === value[i].toUpperCase()) {
                        newValue += value[i].toLowerCase();
                    } else {
                        newValue += value[i].toUpperCase();
                    }
                    i++;
                }                
                return newValue;
			});       
		}
	}
}

angular
	.module('app')
	.directive('format', format);
