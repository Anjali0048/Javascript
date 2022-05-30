// Type conversion and type coercion

let myvar;
myvar = String(34);
console.log(myvar, (typeof myvar));

let booleanVar = String(true);
console.log(booleanVar, (typeof booleanVar));

let arr = String([1,2,3,4,5]);
console.log(arr.length, (typeof arr));

let i=8;
console.log(i.toString());

let stri = Number("3434");
console.log(stri, (typeof stri));

let number = parseInt('34.25');
console.log(number, (typeof number));

let n = parseFloat('34.2545');
console.log(n.toFixed(3), (typeof n));

// Type coercion
let mystr = "646";
let mynum = 32;
console.log(mystr + mynum);   // 64632
