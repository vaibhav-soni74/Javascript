// find method : it basically finds the first condition satisfying value from an array
let trans = [100,500,40,-80,75,850,-200];

let checkTrans = trans.find((n)=>{
    return n<0;
})

console.log(checkTrans)

// findIndex method it basically finds the index of first condition satisfying value from an array

let checkTransInd = trans.findIndex((n)=>{
    return n<0;
    
})
console.log(checkTransInd)