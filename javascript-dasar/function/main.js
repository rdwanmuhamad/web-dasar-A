// function

// function declaration
function sayHello() {
    console.log('Hello');
}

sayHello(); // Call the function

// function expression
const sayHi = function() {
    console.log('Hi');
}

sayHi(); // Call the function

// arrow function
const sayHey = () => {
    console.log('Hey');
}

sayHey(); // Call the function

// function with parameter
function greet(name) {
    console.log(`Hello, ${name}`);
}   

greet('Alice'); // Call the function with argument

// function with return value
function add(a, b) {
    return a + b;
}   

const result = add(5, 3); // Call the function and store the return value
console.log(result); // Output: 8

// function with default parameter
function multiply(a, b = 1) {
    return a * b;
}  

const product = multiply(5); // Call the function with one argument
console.log(product); // Output: 5

// function with rest parameter
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

const total = sum(1, 2, 3, 4, 5); // Call the function with multiple arguments
console.log(total); // Output: 15

// function with callback
function processUserInput(callback) {
    const name = prompt('Please enter your name.');
    callback(name);
} 

processUserInput(function(name) {
    console.log(`Hello, ${name}`);
}); // Call the function with a callback    

// function with closure
function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log(outerVariable, innerVariable);
    };
}  

outerFunction('outside')('inside'); // Call the outer function and then the inner function
//innerFunction('inside'); // Call the inner function directly (will throw an error because innerFunction is not defined in this scope)

// function with IIFE (Immediately Invoked Function Expression)
(function() {
    console.log('This function runs immediately!');
})(); 


// function with recursion
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

const fact = factorial(5); // Call the function with argument
console.log(fact); // Output: 120

// function with async/await
async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData('https://jsonplaceholder.typicode.com/todos/1')
    .then(data => console.log(data))
    .catch(error => console.error(error));

// function with generator
function* generatorFunction() {
    yield 1;
    yield 2;
    yield 3;
}

const generator = generatorFunction();
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);

// function with method
const obj = {
    name: 'John',
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

obj.greet(); // Call the method

// function with constructor
function Person(name, age) {
    this.name = name;
    this.age = age;
}   

// function with prototype
Person.prototype.sayHello = function() {
    console.log(`Hello, my name is ${this.name}`);
};

// function with class
class Animal {
    constructor(name) {
        this.name = name;
    }
}   

Animal.prototype.speak = function() {
    console.log(`${this.name} makes a noise.`);
}