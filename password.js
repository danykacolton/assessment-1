const password = "chickeN5%dooR9$$"
console.log(password)
console.log(password.length + " characters")

// I wasn't sure how to keep my console log clear from all of the Invalid Passwords that inevitably came with all of my loops, so I separated each condition with "1," "2," "3," and so forth. Hopefully that makes more sense. So if a Success is included between the numbers, that means the password passed the condition.

let lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

let upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

let specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '~', '|']
                         
// Here is where I check for password length (between 10 and 20 characters)

if(password.length < 10){
  console.log("Password Invalid")
} else if(password.length >= 10 && password.length <= 20){
  console.log("Success!")
} else {
  console.log("Password Invalid")
}

// Here is where I check for lower and uppercase letters
console.log("1")
for(i = 0; i < 26; i++){
  if(password.includes(lowerCase[i])){
    console.log("Success!")
  } else {
    console.log("Password Invalid")
  }
}
console.log("2")
for(i = 0; i < 26; i++){
  if(password.includes(upperCase[i])){
    console.log("Success!")
  } else {
    console.log("Password Invalid")
  }
}

// Here is where I check for numbers
console.log("3")
for(i = 0; i < 11; i++){
  if(password.includes(numbers[i])){
    console.log("Success!")
  } else {
    console.log("Password Invalid")
  }
}

// Here is where I check for special characters
console.log("4")
for(i = 0; i < specialCharacters.length; i++){
  if(password.includes(specialCharacters[i])){
    console.log("Success!")
  } else {
    console.log("Password Invalid")
  }
}

// Here is where I check for spaces
console.log("5")
if(password.includes(" ")){
  console.log("Password Invalid")
} else {
  console.log("Success!")
}