
const proto = {
    slogan : function(){
        return `This company is the best`
    },
    changeName : function(newName){
        this.name = newName
    }
}
// This creates harry object
// const harry = Object.create(proto);
// harry.name = 'Harry'
// harry.role = 'programmer'

// This also creates harry object
const harry = Object.create(proto,{
    name : {value : "harry2", writable: true},
    role : {value : "programmer"},
})
harry.changeName('Anjali')
// console.log(harry);


console.log('Prototype inheritence');

// Employee constructor
function Employee(name, salary, experience) {
    this.name = name;
    this.salary = salary;
    this.experience = experience;
}

// slogan
Employee.prototype.slogan = function(){
    return `This company is the best regards, ${this.name}`
}

let harryObj = new Employee("Harry",345099,87);
console.log(harryObj.slogan());

// Programmer
function Programmer(name, salary, experience, language){
    Employee.call(this,name,salary,experience);
    this.language = language;
}

// Inherit the prototype
Programmer.prototype = Object.create(Employee.prototype);

// manually set the constructor
Programmer.prototype.constructor = Programmer;

let rohan = new Programmer("Rohan",2,0,"Javascript");
console.log(rohan);