function position() {
    return function(collection, position) {
        if(!position) return collection;
        return collection.filter(function(value){
            return value.position === position;
        })             
    };
}

angular
    .module("app")
    .filter("position", position);