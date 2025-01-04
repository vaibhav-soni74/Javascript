class ToyotaCar {
    start(){
        console.log("Start");
    }

    stop(){
        console.log("Stop");
    }

    setBrand(brand){
        this.brandName = brand;
    }
}
// class in javascript means :  a blueprint for creating objects with predefined properties and methods. It simplifies object creation and management, especially with inheritance and object-oriented programming concepts

let fortuner = new ToyotaCar();
fortuner.setBrand("fortuner");
let lexus = new ToyotaCar();
lexus.setBrand("lexus");

// Inheritence 

class Parent{
    hello(){
        console.log("Hello");
    }
}

class Child extends Parent{}
let obj = new Child();

// Another Example of Inheritence

class Person {
    constructor(name){
        this.species = "HomoSapiens";
        this.name = name;
    }

    eat(){
        console.log("Eats Less");
    }

    sleep(){
        console.log("Sleeps Less");
    }

    all(){
        this.eat();
        this.sleep();
        this.work();
    }
}

class Engineer extends Person{
    constructor(branch, age){
    super();
    this.age = age;
    this.branch = branch; 
    }
    work(){
        console.log("Solve Problems, Code and Debug");
    }
}
class Doctor extends Person{
    constructor(name, age){
        super();
        this.name = name;
        this.age = age;
        }
    work(){
        console.log("Check Patients, Prescribe Medicines");
    }
}

let eng = new Engineer("vaibhav", 19);
let doc = new Doctor("Amit", 20);


// console.log(eng);
// console.log(eng.all());
// console.log(doc);
// console.log(doc.all());