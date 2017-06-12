let cleanRoom = function() {
    return new Promise(function(resolve, reject){
        resolve(" Cleaned the room");
    })
};

let removeGarbage = function(message) {
    return new Promise(function(resolve, reject) {
        resolve(message + " Garbage removed");
    });
};

let winIceCream = function(message) {
    return new Promise(function(resolve, reject) {
        resolve(message + " IceCream won");
    });  
};

// One by one in secuence
cleanRoom().then(function(result) {
    return removeGarbage(result);
}).then(function(result) {
    return winIceCream(result);
}).then(function(result){
    console.log("Finished" + result);
});

// All in parallel
Promise.all([
    cleanRoom(),
    removeGarbage(),
    winIceCream()
]).then(function(){
    console.log("All finished");
});

// One of them is finished
Promise.race([
    cleanRoom(),
    removeGarbage(),
    winIceCream()
]).then(function(){
    console.log("One of them is finished");
});