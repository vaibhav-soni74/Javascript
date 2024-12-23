// Prompt the user to enter full name. Generate a userName for them based on the input.Start username with '@', followed by their fullname and ending with fullname length

let fullName = prompt("Enter Your Name: ")

let userName = "@".concat(fullName)+fullName.length

document.write(userName)