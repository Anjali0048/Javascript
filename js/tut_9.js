console.log('tutorial 9');

// for loop, while , do while loops are applicable same as in c++

// same as for loop used to iterate elements
let arr = [2,5,7,9,1,6];
arr.forEach(function(element){
    // console.log(element);
});

arr.forEach(function(element,index,array){
    // console.log(element,index,array);
});

let obj = {
    'first name' : 'harry',
    channel : 'ÇodeWithHarry',
    marks : [1,5,8,9]
}
for (let i in obj) 
{
    // console.log(obj[i]);
    // console.log(`The ${i} of object is ${obj[i]}`);
}
// console.log('done');

