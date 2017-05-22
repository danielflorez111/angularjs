function couponFormat() {
    return {
        require: "ngModel",
        link: function($scope, $elem, $attrs, $ctrl) {

            var ngModelCtrl = $ctrl;

            ngModelCtrl.$formatters.unshift(function(value) {
                return value.replace(/-/g, "_").toUpperCase();
            });

            ngModelCtrl.$parsers.unshift(function(value){
                return value.replace(/_/g, "-").toLowerCase();
            });
        }
    }
}

angular
    .module("app")
    .directive("couponFormat", couponFormat);