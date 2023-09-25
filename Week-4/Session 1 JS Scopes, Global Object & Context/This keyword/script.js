class Person{

    constructor(Name, Age, Gender, Nationality){

        this.name = Name;
        this.age = Age;
        this.gender = Gender;
        this.nationality = Nationality;

    }
    
    introduce(){
        return ("My name is "+this.name+", I am "+this.age+" years old, I am "+this.gender+" , and I am "+this.nationality);
    }

}

class Student extends Person {

    constructor(Name, Age, Gender, Nationality, Subject){
        
        super(Name, Age, Gender, Nationality);
        this.subject = Subject

    }

    study(){
        return ("I am studying "+this.subject);
    }

}


let per1 = new Person("John",25,"male","American");
let per2 = new Person("Jane",30,"female","Canadian");
let per3 = new Person("Bob",20,"male","Australian");

console.log(per1.introduce());
console.log(per2.introduce());
console.log(per3.introduce());

let stu = new Student("Sarah",18,"female","British","Computer Science");

console.log(stu.introduce());
console.log(stu.study());
