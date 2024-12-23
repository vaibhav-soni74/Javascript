// take the score from user and print the grade

// let score = prompt ("Enter your Score to Check Grades : ")
let score = 45;
if (score > 90 && score <= 100){
    console.log("Grade A")
}else if(score < 89 && score >=70){
    console.log("Grade B")
}else if(score < 69  && score >=60){
    console.log("Grade c")
}else if(score <59 && score >=50){
    console.log("Grade D")
}else{
    console.log("Grade F")
}
