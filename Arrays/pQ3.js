//Q.1] for a given array with marks of students  => [85,97,44,37,76,60], find the average of marksof the entire class

let marks = [85,97,44,37,76,60]

let avg= 0;
for (let mark of marks){
    avg += mark
}
console.log(avg/marks.length)


console.log("________________________________________________________");
console.log("");

//Q.2] for a given array with Price of Five items => [250,645,300,900,50], All items have an ofer of 10%OFF on them. Change the array to store final price after aplying offer.

let items = [250,645,300,900,50];
let finalPrice=[];
for (let item of items){
   let disc= item*10/100;
    item -= disc
    finalPrice.push(item)
}
console.log(finalPrice)

// Q.3] create an array to store companies ->["Bloomberg","Microsoft","Uber", "Google","IBM","Netflix"]. Remove first company from the array , remove uber and add ola at its place. add amazon at the end.

let companies = ["Bloomberg","Microsoft","Uber", "Google","IBM","Netflix"]

// this is for the 1st point 
/*
companies.shift()
console.log("1." + companies)
*/

// this is for the 2nd point
/*
companies.splice(2,1,"Ola")
console.log("2."+ companies)
*/

// this is for the 3rd point
companies.push("Amazon")
console.log(companies.toString())