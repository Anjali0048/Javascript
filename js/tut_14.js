/*
 element selector :
 1. single element selector
 2. multi element selector
*/

//  1. single element selector
let element = document.getElementById('first')
// element = element.className
// element = element.childNodes
// element = element.parentNode
// console.log(element);

element.style.color = 'red';
element.innerText = 'Harry is a good boy'
element.innerHTML = '<h1> Anjali Singh </h1>'
// console.log(element.innerHTML);

let sel = document.querySelector('#first');
sel = document.querySelector('.child');
sel = document.querySelector('h1');
sel.style.color = 'green';
// console.log(sel);

//  2. multi element selector

let elem = document.getElementsByClassName('child')
// console.log(elem[2]);

let ele = document.getElementsByClassName('container')
// console.log(ele[0].getElementsByClassName('child'));

 ele = document.getElementsByTagName('div')
// console.log(ele);

Array.from(ele).forEach(element => {
    // console.log(element);
    element.style.color = 'purple'
});
