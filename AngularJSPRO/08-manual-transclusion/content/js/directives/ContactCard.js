function ContactCard() {
    return {
        transclude: true,
        template: `
            <div>
                <span></span>
                <div></div>
                <p>Test</p>
            </div
        `,
        link: function($scope, $element, $attrs, $ctrl, $transclude){
            var div = $element.find("div");
            var span = $element.find("span");
            var cloned = $transclude(function(elements) {
                elements[1].textContent = elements[1].textContent.toUpperCase();
            });
            span.append(cloned[1]);
            div.append(cloned[3]);
        }
    }
}

angular
    .module("app")
    .directive("contactCard", ContactCard);