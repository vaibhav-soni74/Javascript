// // We are given an array  of marks of students .Filter out the marks of the students that scored 90+

// let marks = [45,59,85,74,90,99,100,65,78,88,92,95,98,89,79,69,55,49,39,29,19,9,99];
// let highMarks = marks.filter((val) =>{
//     return val > 90;
// })
// console.log(highMarks);

// take a number as input frim user  create an array of number 1 to n .
// use reduce method to calculate the sum of all numbers in array
// use reduce method to calculate the product of all numbers in array

let n = prompt("Emter a Number : ")
let num= []
 for (let i = 0; i<=n; i++){
    num = num.push(i);
 }

 let sum = num.reduce((acc, val)=> {
    return acc+ val;
 })
 console.log(sum);

 let product = num.reduce((acc, val)=>{
    return acc*val
 })
 console.log(product)