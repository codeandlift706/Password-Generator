// Assignment code here


// Get references to the #generate element
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button, when clicked executes function writePassword
generateBtn.addEventListener("click", writePassword);

//Alert once clicked
function writePassword() {
  confirm("Do you want to generate a random password with me?");
}

function writePassword() {
  if (confirm("Do you want to generate a random password with me?")) {
    (confirm("Great! Lets get started."));


  } else {
      alert("That's too bad. Maybe next time.");
  }
}

const specialCharacter = ["!", "*", "#", "?", "$", "%", "@"];
const 