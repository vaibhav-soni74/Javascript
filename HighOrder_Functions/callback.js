// lets take a number , check its type as even or odd , if even then square else cube using rollback 
let num;
// checking if the number is even or not, if even call callbackEven else call the callbackOdd
const isEven=(num,callback) => num%2==0 ? callback(num,'even') : callback(num,'odd')

const result = (num,type)=>type == 'even'? console.log(`${num} is even & the calculated value is ${num **2}`) : console.log(`${num} is Odd & the calculated value is ${num **3}`)

isEven(3,result)
isEven(2,result)
