let element = document.createElement('li');
let text = document.createTextNode('I am a text node')
element.appendChild(text);

// Add a class name to the li element
element.className = 'childul';
element.id = 'createdLi';
element.setAttribute('title', 'mytitle')
// element.innertext = '<b> Hello this is created by Anjali </b>';
element.innerHTML = '<b> Hello this is created by Anjali </b>';
// console.log(element);

let ul = document.querySelector('ul.this')
ul.appendChild(element)
// console.log(ul);

let ele2 = document.createElement('h3')
ele2.id = 'ele2'
ele2.className = 'ele2'
let tnode = document.createTextNode('This is a created node for ele2')
ele2.appendChild(tnode);
element.replaceWith(ele2);

let myul = document.getElementById('myul')
myul.replaceChild(element,document.getElementById('fui'))
myul.removeChild(document.getElementById('lui'))

let pr = ele2.hasAttribute('class')
// console.log(pr);

// ele2.removeAttribute('id')


pr = ele2.getAttribute('class')
// console.log(ele2, pr);