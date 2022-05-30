let btn = document.getElementById('btn');
btn.addEventListener('click',func1);
btn.addEventListener('dblclick',func2);
btn.addEventListener('mousedown',func3);

function func1(e){
    // console.log('thanks',e);
    e.preventDefault();      // this will prevent the form to submit
}

function func2(e){
    console.log('thanks its a double click',e);
    e.preventDefault();      // this will prevent the form to submit
}

function func3(e){
    console.log('thanks its a mouse down',e);
    e.preventDefault();      // this will prevent the form to submit
}

document.querySelector('.no').addEventListener
('mouseenter', function(){
    console.log('you entered no');
})

document.querySelector('.no').addEventListener
('mouseleave', function(){
    console.log('you exited no');
})

document.querySelector('.container').addEventListener
('mousemove', function(e){
    console.log(e.offsetX, e.offsetY);
    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetX},${e.offsetY},54 )`;
    console.log('you triggered mouse move event');
})


