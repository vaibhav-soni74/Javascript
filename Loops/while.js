console.log("While loop");

let num = 4;
let i = 1;
while (i <= 10) {
  console.log(` ${num} x ${i} = `, num * i);
  i++;
}

console.log("________________________________________________________");
console.log("");

console.log("Do-While loop");

let val = "I will Code Daily";
let times = 1;
do {
  console.log(val);
  times++;
} while (times <= 5);
