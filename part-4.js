// //scopes

// var globalVariable = 'Hello, global scope!';

// function myFunction() {
//     console.log(globalVariable); // Accessible within the function
// }

// myFunction();
// console.log(globalVariable); // Accessible outside the function

// function myFunction() {
//     if (true) {
//         let blockVariable = 'Hello, block scope!';
//         console.log(blockVariable); // Accessible within the block
//     }
//     console.log(blockVariable); // ReferenceError: blockVariable is not defined
// }

// myFunction();


// function outerFunction() {
//     var functionVariable = 'Hello, function scope!';

//     function innerFunction() {
//         console.log(functionVariable); // Accessible within the function
//     }

//     innerFunction();
// }

// outerFunction();
// console.log(functionVariable); // ReferenceError: functionVariable is not defined


console.log(myVariable); // undefined
var myVariable = 'hoisted variable';
console.log(myVariable);

myFunction();

function myFunction() {
    console.log('hoisted function');
}


const obj = {
    name: "John",
    sayHello: function () {
        console.log(`Hello, ${this.name}!`);
    }
};

obj.sayHello();

function Person(name) {
    this.name = name;
    this.sayHello = function () {
        console.log(`Hello, ${this.name}!`);
    };
}

const person = new Person("John");
person.sayHello();

// const button = document.querySelector("button");
// button.addEventListener("click", function () {
//     console.log(`Clicked on ${this.textContent} button!`);
// });


function greet() {
    console.log(`Hello, ${this}!`);
}

greet(); // Output: Hello, [object Window]!


const person1 = { name: "John" };
const person2 = { name: "Jane" };

function sayHello() {
    console.log(`Hello, ${this.name}!`);
}

sayHello.call(person1); // Output: Hello, John!
sayHello.apply(person2); // Output: Hello, Jane!

const greetJohn = sayHello.bind(person1);
greetJohn(); 
