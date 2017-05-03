function ErrorController () {
    this.list = [
    {
        message: "Oh no, an error occurred!",
        type: "error"
    },
    {
        message: "Make sure you fill all the fields",
        type: "warning"
    },
    {
        message: "This is invalid",
        type: "error"
    }]
}

angular
    .module("app")
        .controller("ErrorController", ErrorController)