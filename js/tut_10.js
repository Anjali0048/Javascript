
function greet(name1,thank=''){
    console.log(`Happy Birthday ${name1}  ${thank}`);
}

let name1 = 'Anjali';
let name2 = 'Sejal';
let name3 = 'Poonam';

greet(name2,'Thanks a lot');
greet(name3);

// we can make functions in objects also

let i = 234;
console.log(i);
function ui(name)
{
    
    let  i = 9;
    console.log(i);        // 9
    return `This is a ${name} ui`;
}
console.log(ui('Harry'),i);    // This is a Harry ui 234