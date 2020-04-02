// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
 
//What criteria does the user want
var userLength = prompt ("Enter a length for desired password. (At least 8 characters and no more than 128 characters)");
var includeLowercase = confirm ("Would you like to include lowercase letters?");
var includeUppercase = confirm ("Would you like to include uppercase letters?");
var includeNumbers = confirm ("Would you like to include numbers?");
var includeSpecialChar = confirm ("Would you like to include special characters?");


//console.log (includeLowercase);

/* function generatePassword() {
  var length = ;
  charset

} */

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
