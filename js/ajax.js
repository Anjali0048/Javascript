console.log("Ajax tutorial in one video");

let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler)

function buttonClickHandler() {
    console.log("you clicked the button");
    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    xhr.open('GET', 'harry.txt', true);  // true means async which means it should not be blocked

    // What to do on progress
    xhr.onprogress = function () {
        console.log('On progress');
    }
    // What to do when response is ready
    xhr.onload = function () {
        console.log('this.responseText');
    }

    // send the request
    xhr.send();

}