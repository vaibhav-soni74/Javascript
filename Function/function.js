/*function Greet(){
    console.log("Hello World!!!")
}
Greet();

function Company (Reesume){
    console.log(`Google`);
}
Company("CV")
*/


// Function for sum of 2 numbers
function sum(a, b) {
    let total = a + b;
    console.log(total);
}
sum(5, 7);

// crete a function that counts vowels from a string

function countVowel(str){
    let count= 0;
    for(let char of str){
        if(char ==='a'|| char ==='e'|| char ==='i'|| char ==='o'|| char ==='u'){
            count++;
        }
    }console.log(count);
}
countVowel("The Quick brown fox jumps over the Lazy dog")


