function CounterController($scope) {
    $scope.count = 0;

    $scope.increment = function increment() {
        $scope.count++;
    };

    $scope.decrement = function decrement() {
        $scope.count--;
    };

    $scope.$watch("count", function(newValue, oldValue) {
        console.log(newValue, oldValue);

    });



}

angular
    .module("app")
    .controller("CounterController", CounterController);

