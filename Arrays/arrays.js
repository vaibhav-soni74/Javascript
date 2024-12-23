// Methods for arrays
// push Method : used to insert an element in an array

let arr = [];
arr.push("hii","Hey",24,53,"yup","How are You? ");
console.log(arr);

//pop method: used to delete the last element from an array

arr.pop()
console.log(arr);

// toString() Method: Used to convert array into strings
console.log(arr.toString());

//shift method: used to delete the first element from an array

arr.shift()
console.log(arr);

// unshift method: used to insert an element at the beginning of an array

arr.unshift("Hello World")
console.log(arr)

   // concat Method: used to join multiple arrays & returns result.
   let arr1 = [1,2,3];
   let arr2 = [4,5,6];
   console.log(arr1.concat(arr2))

   
// splice method: used to insert an element at a specified position in an array
arr1.splice(1,1,"Kaise Ho?")
   console.log(arr1)
