// DOM - Document Object Model

let a = document;    // this will show the whole html file

a = document.all;
// a = document.body;
// a = document.forms;

Array.from(a).forEach(function(element){
    // console.log(element);
});
a = document.links[0].href;
// console.log(a);


// Exercise
let d = document.links;
Array.from(d).forEach(function(element){
    if(element.href.includes('harry')){
        console.log(element.href);
    }           
});
