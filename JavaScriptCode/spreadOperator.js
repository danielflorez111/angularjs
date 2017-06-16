const books = ["Don Quixote", "The Hobbit", "Alice in Wonderland", "Tale of Two Cities"];
console.log(...books);


const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
console.log(...primes);


[a, b, ...iterableObj] = [1, 2, 3, 4, 5];
console.log(a);
console.log(b);
console.log(...iterableObj);


var args = [1, 3, 5];
function add(x, y, z) {
    return x + y + z;
};
console.log(add(...args));


var parts = ['shoulder', 'knees'];
var lyrics = ['head', ...parts, 'and', 'toes']
console.log(...lyrics);


const order = [20.17, 18.67, 1.50, "cheese", "eggs", "milk", "bread"];
const [total, subtotal, tax, ...items] = order;
console.log(total, subtotal, tax, items);