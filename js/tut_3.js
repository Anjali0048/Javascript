console.log('tut_3');

// variables in js
// var, let, const

var name = 'harry';
name = 'anjali';        //name will be changed
var channel;
// channel = 'CodeWithHarry'
console.log(name, channel);

// rules for creating js variables
/*
1. cannot start with numbers
2. can start with letters, numbers, _ , $
3. case sensitive
 */

var city = 'Delhi';

//const is used to avoid multiple variable names

const ownerName = 'Hari Ram';  //here noone can change the owner name
// ownerName = 'Anjali';       //error since we cannot change the name in const 
console.log(ownerName);

// const fruit;    //error

{
    let city = 'Rampur';
    city = 'Kolkata';     // global  when rampur is commented then it will print Kolkata since it is global
    console.log(city);    //ans -> Kolkata
}
console.log(city);

const arr1 = [12,23,12,53,3];
// arr1[35,24,12];      // Error
arr1.push(45);
console.log(arr1);      // [12,23,12,53,3,45]


/* Most common programming case types:

1. camelCase
2. kebab-case
3. snake_case
4. PascalCase

*/