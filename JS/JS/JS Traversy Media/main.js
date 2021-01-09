// alert('Hello World'); 
// console.log('Hello World');
// console.error('This is an error!!');
// console.warn('This is a warining');

// Variables
// var = Global
// let = ES6 use mostly
// let can reasign but const can't reasign

// let age = 30;
// age = 31;
// console.log(age);

// const num = 10;
// // num = 12; // Give the error
// console.log(num);

// End of Variables

// Data Types
// String, Numbers, Boolean, null, undefined, Symbol(Use in ES6)

// const name = 'John';
// const years = 30;
// const rating = 4.5;
// const isCool = true;
// const x = null; // null is Basically empty
// const y = undefined;
// let z;

// console.log(typeof name);
// console.log(typeof years);
// console.log(typeof rating);
// console.log(typeof isCool);
// console.log(typeof x);
// console.log(typeof y);
// console.log(typeof z);

// End of Data Types

// const name = 'John';
// const age = 30;

// // Concatenation
// console.log('My name is ' + name + ' and I am ' + age);
// // Template String
// const hello = `My name is ${name} and I am ${age}`;
// console.log(hello);

// End of Concatenation

// const s = 'technology, computers, it, code';
// console.log(s.length);
// console.log(s.toUpperCase());
// console.log(s.substring(0, 5).toUpperCase());
// console.log(s.split(','));

/* Multi 
line
Comments */

// Arrays - variables that hold multiple values

// const numbers = new Array(1,2,3,4,5);
// console.log(numbers);

// const fruits = ['apples', 'oranges', 'pears', 1, true];
// console.log(fruits);
// console.log(fruits[1]);

// fruits[3] = 'grapes';
// console.log(fruits);

// fruits.push('mangoes');
// console.log(fruits);

// fruits.unshift('strawberries');
// console.log(fruits);

// fruits.pop();
// console.log(fruits);

// console.log(Array.isArray('hello'));
// console.log(Array.isArray(fruits));
// console.log(fruits.indexOf('oranges'));

// End of Array

// Object Literals

// const person = {
//     firstName: 'John',
//     lastName:'Doe',
//     age: 30,
//     hobbies: ['music', 'movies', 'sports'],
//     address: {
//         street: '50 main st',
//         city: 'Boston',
//         state: 'MA'
//     }
// }

// console.log(person.address.city);
// console.log(person.hobbies[1]);

// // const { firstName, lastName } = person;
// // console.log(firstName);

// const { firstName, lastName, address: {city}} = person;
// console.log(city);

// person.email = 'john@gamil.com';
// console.log(person);

// End of Basic Object Literals

// New Object Literals

// const todos = [
//     {
//       id: 1,
//       text: 'Take out trash',
//       isCompleted: true  
//     },
//     {
//       id: 2,
//       text: 'Meeting with boss',
//       isCompleted: true  
//     },
//     {
//       id: 3,
//       text: 'Dentist appt',
//       isCompleted: false 
//     },

// ];

// // console.log(todos[1].text);

// // This is the way to send to server 
// // const todoJSON = JSON.stringify(todos);
// // console.log(todoJSON);

// // For loop

// for(let i=0; i < 10; i++) {
//     console.log(`For Loop Numbers: ${i}`);
// }

// // While loop

// let i = 0;
// while(i < 10) {
//     console.log(`While Loop Numbers: ${i}`);
//     i++;
// }

// for(let i=0; i < todos.length; i++) {
//     console.log(todos[i].text);
// }

// for(let todo of todos) {
//     console.log(todo.id);
// }

// // forEach, map, filter

// // Foreach
// todos.forEach(function(todo){
//     console.log(todo.text);
// });

// // Map
// const todoText = todos.map(function(todo) {
//                     return todo.text;
//                  });

// console.log(todoText);


// // Filter
// const todoCompleted = todos.filter(function(todo) {
//                     return todo.isCompleted === true;
//                 });

// console.log(todoCompleted);

// // Filter with map
// const todoCompletedText = todos.filter(function(todo) {
//                     return todo.isCompleted === true;
//                 }).map(function(todo) {
//                     return todo.text;
//                 });

// console.log(todoCompletedText);

//End of New Object Literals

// Conditons

// const x = 10;

// if(x == 10) {
//     console.log('x is 10');
// }


// const y = '25';

// if(y === 20) {
//     console.log('y is 20');
// }
// else if(y === '20') {
//     console.log('y is 20 String');
// }
// else {
//     console.log('y is String');
// }

// if(x > 5 || y === '20') {
//     console.log('x is more than 5 or y is string 20')
// }

// End of Conditons

// Ternary Operators

// const x = 10;
// const color = x > 10 ? 'red' : 'blue';
// console.log(color);

// switch(color) {
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'blue':
//         console.log('color is blue');
//         break;
//     default:
//         console.log('color is NOT red or blue');
//         break;
// }

// End of Ternary Operators

// Funtions

// function addNums(num1, num2) {
//     console.log(num1 + num2);
// }

// addNums(5, 4);

// function divideNums(num1 =1, num2 =1) {
//     console.log(num1 / num2);
// }

// divideNums();
// divideNums(12, 3);

// function multiNums(num1 = 1, num2 = 1) {
//     return num1 * num2;
// }

// console.log(multiNums(5,5));

// // Arrow Functions
//   // Mostly use in ES6

// const subNums = (num1 = 1, num2 = 1) => {
//     console.log(num1 - num2);
// }

// subNums(5, 9);

// End of Functions

// OOP in JS
 
// Constructor function name start in Capital letter

// Constructor functions
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob); // Date Object
    // this.getBirthYear = function() {
    //     return this.dob.getFullYear();
    // }
    // this.getFullName = function() {
    //     return `${this.firstName} ${this.lastName}`;
    // }
}

// Same above getBirthYear Function prototype way
Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}

// getFullName Function prototype way
Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}


// Instantiate object
const person1 = new Person('John', 'Doe', '4-3-1998');
const person2 = new Person('Mary', 'Smith', '4-4-1999');

console.log(person1);
console.log(person2);
console.log(person2.firstName);
console.log(person2.dob.getFullYear());

console.log(person1.getBirthYear());
console.log(person1.getFullName());

// Class

class People {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const person3 = new People('Mathew', 'Kameran', '4-5-1988');
console.log(person3);
console.log(person3.getBirthYear());
console.log(person3.getFullName());

// End of OOP in JS

// DOM














