// Primitive Data Types

// String
let name = 'Harry';
console.log("My name is " + name);
console.log("Data Type is " + (typeof name));

// Numbers
let mark =34;
console.log('Data Type is ' + (typeof mark));

// Boolean
// Null
// Undefined
// Symbol   ES6


// Reference Data Type

// Arrays
let arr = [1,2,3,4,false,"string"];
console.log('Data Type is ' + (typeof arr));

// Object Literals
let marks = {
    harry : 89,
    Shubham : 34,
    "Rohan Das" : 23
}
console.log(marks);
console.table(marks);     // This will create a table

// function
function findName() {
    
}
console.log( typeof findName);

// Date
let date = new Date();
console.log(typeof date);