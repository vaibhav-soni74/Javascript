let str = "Code4u"
let str2 = "Vaibhav Soni"

// String length property : It gives the length of the string 
console.log(str.length) // Output: 6

console.log("________________________________________________________");
console.log("");

// String Indices property: Used to access particular character of String
console.log(str2[5]);


console.log("________________________________________________________");
console.log("");

// Template literal:  is a method used to create strings by substituting placeholders


console.log(`My name is ${str2}`);
console.log(typeof `my name is ${str2}`)// it converts any value in string value 

console.log("________________________________________________________");
console.log("");


// BUILT-IN FUNCTION TO MANIPULATE STRINGS
// str.toUpperCase() : is used to convert the string in UPPERCASE

let name = str.toUpperCase() 
console.log(name)

console.log("________________________________________________________");
console.log("");

// str.toLowerCase() : is used to convert the string in lowercase
let Name = str2.toLowerCase() 
console.log(Name)

console.log("________________________________________________________");
console.log("");

// str.trim() : used to remove white spaces from the string from start and begin
let sen = "I hope this repo will be useful for you guys. "
console.log(sen.trim())

console.log("________________________________________________________");
console.log("");

//str.slice(start,end?) : returns part of string. It returns the string from the starting letter to the ending letter , but ending letter is not included.

console.log(sen.slice(8, 18))

// str.concat(str2) : joins str2 with str
console.log(sen.concat(str2))//other method to concatenate is (sen + str2)

console.log("________________________________________________________");
console.log("");

//str.replace(searchVal, newVal) : used to search a aplahbet in string and replace it with other
console.log(sen.replace("repo", "repository"))

console.log("________________________________________________________");
console.log("");

//str.charAt(index) : returns the character from the string at a given index
console.log(str.charAt(5)) 
