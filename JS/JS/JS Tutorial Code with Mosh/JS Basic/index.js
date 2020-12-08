// This is my first Java Script Code
// console.log('Hello World');

// Variables*********************************************************************
let name = 'Tharindu';
console.log(name);

// Rule of Variables
//     Can't be a reserved keyword
//     Should be meaningful
//     Can't start with a number (1name)
//     Can't contain a space or hypen (-)
//     Are case-sensitive

let firstName = 'Tharindu';
let lastName = ' Gihan';
console.log(firstName+lastName);

// Constant Variables***********************************************************
const ineterestRate = 0.3;
console.log(ineterestRate);

// Types************************************************************************
//     Primitive/Value Types
            // String
            // Number
            // Boolean
            // undefined
            // null
//     Reference Types 
            // Object
            // Array
            // Function

// Primitive Types***********************************************
let username = 'Tharindu'; // String Literal
let age = 22; // Number Literal
let isApproved = true; // Boolean Literal
let surname = undefined;
let selectedColor = null;


// Dynamic Typing************************************************
//     Static (string name = 'John' (Can't Change type at the run time))
//     Dynamic (let name = 'John' (Can Change type at the run time)) => JS is Dynamic Typing


// Reference Type************************************************

let namePerson = 'Tharindu';
let agePerson = 22;
let person = {
    namePerson: 'Tharindu',
    agePerson: 22
};

console.log(person);

// Dot Notation
person.namePerson = 'John'
console.log(person.namePerson);

// Bracket Notation
person['namePerson'] = 'Mary'
console.log(person.namePerson);

// Usage

let selection = 'namePerson';
person[selection] = 'Hanby';
console.log(person.namePerson);

// This don't use for best practices
    // person.selection = 'Kristen';
    // console.log(person.namePerson);

// Array*****************************************************************
let selectedColour = ['red', 'blue'];
selectedColour[2] = 'green';
selectedColour[3] = 1;

console.log(selectedColour[0]);
console.log(selectedColour);
console.log(selectedColour.length);

// Functions*************************************************************

// Performing a task
function greet() {
    console.log('Hello Function');
}

// Performing a task
function greetName(name) {
    console.log('Hello '+ name);
}

// Performing a task
function greetFullName(firstName, lastName) {
    console.log('Hello ' + firstName + ' ' + lastName);
}
greet();
greetName('John');
greetName('Mary');
greetFullName('John', 'Smith');

// Type of Functions

// Calculating a Value
function square(number) {
    return number * number;
}

let number = square(2);
console.log(number);
console.log(square(3));

// console.log is function Call



