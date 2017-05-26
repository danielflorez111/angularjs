function gender() {
    return function(collection, gender) {
        if(!gender) return collection;
        return collection.filter(function(value){
            return value.gender === gender;
        })             
    };
}

angular
    .module("app")
    .filter("gender", gender);