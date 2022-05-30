console.log("this is tutorial 28");

// Object literal : object.prototype
let obj1 = {
    name : 'Harry',
    channel : 'CWH',
    address : 'Mars'
}
function obj (givenName){
    this.name = givenName
}

obj.prototype.getName = function(){
    return this.name;
}

obj.prototype.setName = function (newName){
    this.name = newName;
}

let obj2 = new obj('Anjali')
console.log(obj2);