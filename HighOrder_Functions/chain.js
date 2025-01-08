let arr = [
  { name: "A", age: 25, gender: "M" },
  { name: "B", age: 15, gender: "M" },
  { name: "C", age: 34, gender: "F" },
  { name: "D", age: 24, gender: "F" },
  { name: "E", age: 44, gender: "M" },
  { name: "F", age: 36, gender: "F" },
  { name: "G", age: 28, gender: "M" },
  { name: "H", age: 47, gender: "F" },
];

// Age of all the males

let males = arr
  .filter((obj) => {
    return obj.gender == "M";
  })
  .map((male) => {
    return `Name : ${male.name}  "Age : ${male.age}`;
  });

let females = arr
  .filter((obj) => {
    return obj.gender == "F";
  })
  .map((female) => {
    return `Name : ${female.name}  Age : ${female.age} `;
  });

console.log(males , females);


// filter out positive transactions and calculate the sum of all the positive transaactions

let transactions = [1000,-2000,2500,2600,-3581,-851,1025,2500];

let sum = transactions.filter((trans)=>{
    return trans > 0
}).reduce((assoc,val)=>{
    return assoc + val;
},0);

console.log(sum)