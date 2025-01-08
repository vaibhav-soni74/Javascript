//Some Method : it check the condititon and reutrn true or false condition based on a condition. It will return True if even 1 or more than 1 element satisfies the condition 

let trans = [-100,-500,-405,-810,-752,-850,-200];

let value = trans.some((n)=>{
    return n>0
}
)
console.log(value)

//every method : it check the condititon and reutrn true or false condition based on a condition. It will return True if every element satisfies the condition 

let trade = [-100,-500,-405,-810,752,-850,-200];

let checkTrade = trade.every((n)=>{
    return n<0
}
)
console.log(checkTrade)
