// Traditional function expression
const add = function (a, b) {
    return a + b;
};

// Arrow function syntax
//   const add = (a, b) => a + b;

// Traditional function expression with block body
const multiply = function (a, b) {
    return a * b;
};

// Arrow function with block body
//   const multiply = (a, b) => {
//     return a * b;
//   };

// Arrow function with implicit return
const square = x => x * x;

// Arrow function with no parameters
const greet = () => console.log("Hello!");

// Arrow function as a callback
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
