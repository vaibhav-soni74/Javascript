console.log("for loop")

let evenNum =[];
for (i=0; i <= 100; i++){
    if (i%2 === 0){
       evenNum.push(i);
    }
}
console.log(evenNum);

console.log("________________________________________________________")

console.log("")
 console.log("for-of loop")
// For-of loop used for strings 

let str = "vaibhav";
let arr=[];
let size= 0.
for (let i of str){
    arr.push(i)
    size++;
}
console.log(arr)
console.log("size = ", size )

console.log("________________________________________________________")
console.log("")
 console.log("for-in loop")
// For-in loop used for objects

let stud = {
    name: "John Doe",
    rollNo: 54,
    year: "3rd",
    branch: "CSD"
}
 for(let key in stud) //it returns key
    {
console.log(stud[key]);
 }
 console.log("________________________________________________________")
