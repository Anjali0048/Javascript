class Employee{

    constructor(givenName, givenExperience, givenDivision){
        this.name = givenName;
        this.Experience = givenExperience;
        this.Division = givenDivision;
    }

    slogan(){
        return `I am ${this.name} and this company is the is best`;
    }

    DOJ(){
        return 2020 - this.Experience;
    }

    static add(a,b){
        return a + b;
    }
} 

class Programmer extends Employee{
    constructor(givenName, givenExperience, givenDivision, language){
        super(givenName,givenExperience, givenDivision);
        this.language = language;
        this.github = github;
    }
    favoriteLanguage(){
        if(this.language == 'python'){
            return 'python';
        }
        else{
            return 'javascript'
        }
    }
    static multipy(a,b){
        return a*b;
    }
} 

// harry = new Employee("Anjali",56,"Division");
// console.log(harry.slogan());                                                    
// console.log(harry.DOJ());                                                    
// console.log(Employee.add(34,5));

rohan = new Programmer("Rohan", 3, "Lays", "Go", "Rohan420")
console.log(rohan);