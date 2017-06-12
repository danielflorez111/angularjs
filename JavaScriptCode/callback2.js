let add = function(a, b) {
    return a + b;
};

let multiply = function(a, b) {
    return a * b;
};

let calc = function(num1, num2, callback) {
    if(typeof callback === "function") {
        return callback(num1, num2);
    }
};

console.log(calc(2, 3, add));
console.log(calc(2, 3, multiply));
console.log(calc(2, 3, function(a, b) { 
    return a-b; 
}));
console.log(calc(2, 3, "I am not a function"));
console.log(calc(2, 3, 5));7