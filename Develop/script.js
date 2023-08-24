// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button, when clicked executes function writePassword
generateBtn.addEventListener("click", writePassword);

//Alert once clicked
//function writePassword() {
//  alert ("Generate a random password with me!");
//}
