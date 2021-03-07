// Assignment Code 
var generateBtn = document.querySelector("#generate");

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var specialChar = ['!', '@', '#', '$', '%', '&', '?', '*', '^'];

var upperCase = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];

var lowerCase = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];



function generatePassword() {
  // parseInt() function analyzes strings and gives a integer
  // Determines the lebgth of the password to generate
  // Prompts within generatePassword function
  var userLength = parseInt(window.prompt("How many characters do you want your password to be? (8-128)" ));
  if ( isNaN(userLength) || userLength < 8 || userLength > 128) {
    window.alert("Choose a password length between 8 and 128")
    return
  }

  var AllowedChars = []

  var useLowerCase = window.prompt("Would you like to include lowercase letters? (Y/N".toUpperCase())
  if (useLowerCase === 'Y') {
    allowedChars = allowedChars.concat(lowerCase)
  }

  var useUpperCase = window.prompt("Would you like to include uppercase letters? (Y/N".toUpperCase())
  if (useUpperCase === 'Y') {
    allowedChars = allowedChars.concat(upperCase)
  }

  var useNumbers = window.prompt("Would you like to include numbers? (Y/N".toUpperCase())
  if (useNumbers === 'Y') {
    allowedChars = allowedChars.concat(numbers)
  }

  var useSpecialChar = window.prompt("Would you like to include special characters? (Y/N".toUpperCase())
  if (useSpecialChar === 'Y') {
    allowedChars = allowedChars.concat(specialChar)
  }

  if (allowedChars === 0) {
    window.alert("You must select at least one to receive a password.")
    return allowedChars;
  }

  var password = "";

  for(var i=0; i < userLength; i++) {
    var index = Math.floor(Math.random() * allowedChars.length);
    var character = allowedChars[index];
    password = password.concat(character)
  }

  return password
}

function writePassword(){
  var password = generatePassword();
  if (password) {
  var passwordText = document.querySelector("#password"); 

  passwordText.value = password;
}

}  



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
