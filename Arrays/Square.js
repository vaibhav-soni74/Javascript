
/**Question:**  

Write a JavaScript program that starts with an array `[10, 20, 30, 40]` and adds 5 more elements, each 10 greater than the last. Generate a new array containing the squares of all elements in the updated array and print it to the console.*/


let array = [10,20,30,40];
let n = 5;
let sqr = []; //empty array
function input (){
    for (let i = 0; i < n; i++) {
            array.push (10 + array[array.length-1])
    }
    // 
}

function square(){
    for (let i = 0; i < array.length; i++) {
        sqr.push(array[i]*array[i]);
}
console.log(sqr);
}
input();
square();

