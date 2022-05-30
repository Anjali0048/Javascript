let marks = [32,45,89,52,74,59];
const fruits = ['Orange', 'Apple','Pineapple'];
const mixed = [`str`, 89,[3,5]];

const arr = new Array(23,123,21,'Orange');
// console.log(arr);
// console.log(mixed);
// console.log(fruits[0]);


// console.log(arr.length);
// console.log(Array.isArray(arr));
arr[0] = 'harry';
let arrele = arr[0];
// console.log('element : ', arrele);
// console.log(arr);

// console.log(marks);
let value = marks.indexOf(52);
// console.log(value);

// Mutating or Modifying arrays 
marks.push(25);          // 25 will be added at index last
// marks.unshift(25);    // 25 will be added at index 0
// console.log(marks);

marks.pop();     // pop from last
marks.shift();   // pop from index 0

marks.splice(1,2);   // delete from (index no., 2 elements )
console.log(marks);

marks.reverse();

let marks2 = [1,2,3,4,5];
marks = marks.concat(marks2);
// console.log(marks);

let myobj = {
    'first name' : 'harry',
    channel : 'ÇodeWithHarry',
    isActive : true,
    marks : [1,5,8,9]
}
// console.log(myobj);
// console.log(myobj.marks);
// console.log(myobj['marks']);

