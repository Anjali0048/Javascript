// Objects Literals, Constructors and OOPs

// object literals for creating objects 
let car = {
    name : 'Maruti 800',
    topSpeed : 89,
    run : function(){
        console.log("car is running");
    }
}
// console.log(car);

// we have already seen constructors like these:
// new Date();

// Creating a constructor for cars
function GeneralCar(givenName,givenSpeed){
    this.name = givenName;
    this.topSpeed = givenSpeed;
    this.run = function(){
        console.log(`${this.name} is running`);
    }
    this.analyze = function(){
        console.log((`This car is slower by ${200-this.topSpeed} than Mercerdies`));
    }
}

car1 = new GeneralCar('Nissan',180)
car2 = new GeneralCar('Grand i10 Sportz',80)
console.log(car2);



   