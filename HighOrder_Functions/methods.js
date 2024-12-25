// map method

let nums = [2,3,4,5,6,7,8,9,10];
let squares = nums.map((val)=>{
return val*val;
})
console.log(squares)

// filter method
let even = nums.filter((val)=>{
    return val % 2 ===0;

})
console.log(even)
