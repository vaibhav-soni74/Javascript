//  

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