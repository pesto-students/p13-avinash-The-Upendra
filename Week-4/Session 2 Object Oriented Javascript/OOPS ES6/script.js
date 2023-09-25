
// Section 1 - Inheritance:

class Vehicle {

    constructor(Make , Model , Year , Color ){
        this.make = Make;
        this.model = Model;
        this.year = Year;
        this.color = Color;
    }
    


    drive(){
        console.log("Driving "+ this.make +" "+ this.model);
    }


}

class Car extends Vehicle {

    constructor( Make , Model , Year , Color , NumSeats ){
        super( Make , Model , Year , Color );
        this.numSeats = NumSeats;
    }
}

class RideShareCar extends Car {

    constructor( Make , Model , Year , Color , NumSeats , IsAvailable){
        super( Make , Model , Year , Color , NumSeats )
        this.isAvailable = IsAvailable;
    }
}

// Section 2 - Polymorphism:

class Shape {

    calculateArea(){

    }
}

class Rectangle extends Shape {
    calculateArea( width, height ){
        let area =  width*height ;  
        return area;  
    }
}

class Triangle extends Shape {
    calculateArea( base, height ){
        let area = (base * height) / 2;
        return area;  
    }
}

class Circle extends Shape {
    calculateArea( radius ){
        let area =  Math.PI * radius * radius;
        return area;  
    }
}

let rectangleObj = new Rectangle();
console.log( rectangleObj.calculateArea( 2 , 4 ) );

let triangleObj = new Triangle();
console.log( triangleObj.calculateArea( 2 , 4 ) );

let circleObj = new Circle();
console.log( circleObj.calculateArea( 2 ) );


// Section 3 – Abstraction and encpasulation:

class BankAccount {

    #accountNumber;
    #balance ;
    #accountHolderName;

    constructor(){

        this.#accountNumber = 0;
        this.#balance = 0 ;
        this.#accountHolderName = "AccountHolderName" ;
    }
    getbalance() {
        return this.#balance;
    }
    setbalance(amount) {
       
        this.#balance = amount;
    }
}

class CheckingAccount extends BankAccount{

    constructor(){
        super()
    }

    deposit( amount  ){
        let bal = this.getbalance();
        bal = bal + amount;
        this.setbalance(bal);
        return (amount+" deposited sucessfully");
    }

    withdraw( amount ){
        let bal = this.getbalance();
        bal = bal - amount;
        this.setbalance(bal);
        return (amount+" withdrwan sucessfully");
    }

    getBalance(){
        return ("Checking Account balance  = "+ this.getbalance());
    }
}

class SavingsAccount extends BankAccount{

    constructor(){
        super()
    }

    deposit( amount ){
        let bal = this.getbalance();
        bal = bal + amount;
        this.setbalance(bal);
        return (amount+" deposited sucessfully");
    }

    withdraw( amount ){
        let bal = this.getbalance();
        if( (bal - amount) < 0){
            return (amount+" withdrwan failed");
        }
        else{
            bal = bal - amount;
            this.setbalance(bal);
            return (amount+" withdrwan sucessfully");
        }
        
    }

    getBalance(){
        return ("Savings Account balance  = "+ this.getbalance());
    }
}
// deposit(), withdraw(), and getBalance() 


let currentObj = new CheckingAccount()
console.log(currentObj.deposit(1000));
console.log(currentObj.getBalance())
console.log(currentObj.withdraw(500))
console.log(currentObj.getBalance())



let savingObj = new SavingsAccount();
console.log(savingObj.deposit(1000));
console.log(savingObj.getBalance())
console.log(savingObj.withdraw(1500))
console.log(savingObj.getBalance())
