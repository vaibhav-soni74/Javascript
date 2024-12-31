const stud = {
    name :"John",
    marks: 94,
    printMarks :function (){console.log("Marks =", this.marks);}, 
};


// __proto__ is a reference to the object's prototype object
 

const employee={
    calcTax(){
        console.log("The Tax rate is 18%")
    },
}

let emp1={
    name:"JOHN",
    salary:50000,
}
 emp1.__proto__ = employee;
 //here emp1 is set as the prototype of employee object. where it can use the function of employee object.

//  console.log(emp1.calcTax());