// Protecting the Object

let person = {

    
    age : 0 ,

    getAge(){
        return this.age;
    },

    setAge(age){
        this.age = age;
    }

}

Object.defineProperties(person, {
    'name': {
        value: "XYZ",
        writable: false
    },
    'email': {
        value: 'Hello@XYZ',
        writable: false
    }
});

// JavaScript Prototype

function Vehicle ( make, model , year ) {

    this.make = make;
    this.model = model;
    this.year = year;
}

Vehicle.prototype.getDetails =  function(){
    return ("Make : "+this.make+" Model : "+this.model+" Year : "+this.year)
}

function Car( make, model , year , numDoors ){

    Vehicle.call( this, make, model , year)
    this.numDoors = numDoors;
} 

Car.prototype = Object.create(Vehicle.prototype);

Car.prototype.getDetails = function(){
    return ("Make : "+this.make+" Model : "+this.model+" Year : "+this.year+" Number of Doors : "+this.numDoors)
}

let vehicleObj = new Vehicle("Ford","F150",2019);
let carObj = new Car("Ford","F150",2019 , 4 );

console.log(vehicleObj.getDetails())
console.log(carObj.getDetails());