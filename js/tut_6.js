// STRINGS

const name = 'Anjali';
const greeting = 'Good Morning';
console.log(greeting + ' ' + name);

let html;
html = '<h1> this is heading </h1> ';
html = html.concat('this', ' name');
console.log(html);
console.log(html.length);
console.log(html.toLowerCase());
console.log(html.toUpperCase());
console.log(html);       // original string is as it is 

console.log(html[1]);
console.log(html.indexOf('this'));
console.log(html.lastIndexOf('this'));
console.log(html.charAt(5));
console.log(html.endsWith('name'));
console.log(html.includes('heading'));
console.log(html.substring(0,4));
console.log(html.slice(0,4));
console.log(html.split(' '));
console.log(html.replace('this', 'it'));   // only first this will be replaced

let fruit1 = 'Orange';
let fruit2 = 'Apple';
let myHtml = `Hello ${name}
            <h1> This is ' ; " heading </h1>
            <p> You like ${fruit1} and ${fruit2}
            `;
document.body.innerHTML = myHtml;

