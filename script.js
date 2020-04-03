// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
 
//What criteria does the user want
/* var userLength = prompt ("Enter a length for desired password. (At least 8 characters and no more than 128 characters)");
var includeLowercase = confirm ("Would you like to include lowercase letters?");
var includeUppercase = confirm ("Would you like to include uppercase letters?");
var includeNumbers = confirm ("Would you like to include numbers?");
var includeSpecialChars = confirm ("Would you like to include symbols?"); */

//Random character generators-http://www.net-comber.com/charset.html 
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() *26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() *26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() *10) + 48);
}

function getRandomSymbol() {
  var symbols = ["!", "#", "$", "%", "^", "&", "(", ")", "*", "+", "-", ".", "/", "<", "=", ">", "?", "@", "_", "~"];
  return symbols[(Math.floor(Math.random() *20))];
}


console.log(getRandomSymbol());


/* function generatePassword() {
  var length = userLength;
  charset

} */

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
