let imoArr = ['adrak','pyaz','bhindi'];


// Add a key-value pair inside local storage
localStorage.setItem('Name', 'Harry')
localStorage.setItem('Name2', 'Anjali')
localStorage.setItem('sabzi', JSON.stringify(imoArr))

// localStorage.clear();    // clears the entire local storage 

// localStorage.removeItem('Name')   // to clear a paticular key-value pair

let name = localStorage.getItem('Name')
name = JSON.parse(localStorage.getItem('sabzi'));
console.log(name);


sessionStorage.setItem('Name', 'Harry')
sessionStorage.setItem('Name2', 'Anjali')
sessionStorage.setItem('sabzi', JSON.stringify(imoArr))