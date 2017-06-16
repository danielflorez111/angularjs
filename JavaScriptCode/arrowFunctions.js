let names = ["Daniel", "Ayrton", "Mateo", "Marcos"];
names = names.map(
    name => name.toUpperCase()
);
console.log(names);


const greet = name => `Hello ${name}!`;
console.log(greet("Daniel"));


const add = (a, b) => a + b;
console.log(add(3, 2));


const sayHi = () => console.log('Hello Udacity Student!');
sayHi();


const upperizedNames = ['Farrin', 'Kagure', 'Asser'].map( name => {
  name = name.toUpperCase();
  return `${name} has ${name.length} characters in their name`;
});
console.log(upperizedNames);