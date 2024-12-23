// Create a Game where you start with a random game number.ask the user to keep guessing the number until the user enters the correct value

let num = 48;
 let guess = prompt("Guess the number");

 while(guess != num){
    guess = prompt("You entered wrong number. Guess again")
 }
 document.write("<h1 style= color:green;>Congratulations You guessed the correct Number <\h1>")