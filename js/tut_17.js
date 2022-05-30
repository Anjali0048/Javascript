// Events and events objects

// we can use 'mouseover' in place of click so that if we hover on it then it will show all those functions
document.getElementById('heading').addEventListener
('click', function(e){
    console.log('You have clicked the heading');
    // location.href = '//codewithharry.com'

    variable = e.target;
    variable = e.target.className;
    variable = e.target.classList;
    
    variable = e.target.id;
    variable = e.offsetX;    // wrt heading in this example
    variable = e.clientX;    // wrt browser window
    variable = e.clientY;    // wrt browser window
    
    console.log(variable);

})
