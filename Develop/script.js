// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//---------------------------------------------------------------------------------------

  function PasswordCharacterLength () {
    const characterlength = prompt("What is the length of your desired password?")
  
    
    if (characterlength < 8) {
      alert("Length of password must be at least 8 characters. Please input a different number.");
  
    return;
  
    } else if (characterlength > 128){
      alert("Length of password must be less than 128 characters. Please input a different number.");
  
    return;
  
    } else if (characterlength >= 8 && characterlength < 128) {
      alert("Got it! Now, which character type(s) do you want to include in your password? Select at least one.");
    }
  
    
  
    const password = generatePassword();
    const passwordText = document.querySelector("#password");
    
    passwordText.value = password;
  
  }

//--------------------------------------------------------------

// RESOURCE FROM CLASS
  const generateBtn = document.querySelector("#generate");

  function writePassword() {
    const characterSelection = [];
    
    const SelectLowercaseChar = confirm("Do you want lowercase characters?"); 
    const SelectUppercaseChar = confirm("Do you want uppercase characters?"); 
    const SelectNumberChar = confirm("Do you want numeric characters?"); 
    const SelectSpecialChar = confirm("Do you want special characters?"); 

    const WantLowercaseChar = "qwertyuiopasdfghjklzxcvbnm".split("").sort();
    const WantUppercaseChar = "QWERTYUIOPASDFGHJKLZXCVBNM".split("").sort();
    const WantNumberChar = "1234567890".split("").sort();
    const WantSpecialChar = "!@#$%^&*_+:<>".split("").sort();
    
    if (SelectLowercaseChar) {
     characterSelection.concat("WantLowercaseChar"); 
    }
    
    if (SelectUppercaseChar) {
      characterSelection.concat("WantUppercaseChar"); 
    }
    
    if (SelectNumberChar) {
      characterSelection.concat("WantNumberChar"); 
    }
    
    if (SelectSpecialChar) {
      characterSelection.concat("WantSpecialChar"); 
    }
    
    return characterSelection[Math.floor(Math.random() * characterSelection.length)];
  }
  
  function generatePassword() {
    const CharacterSelected = CharacterOption();
    
    alert("Great!");  
  }
  
  generateBtn.addEventListener("click", writePassword)


//----------------------------------------------------------------------------------
//if confirmed, the password criteria will be added to the caracter set array

for (let i = 0; i <  ; i++) {


  return inAttendance[Math.floor(Math.random() * inAttendance.length)];


  for (let i = 0; i < convertInt; i++) {
    const randomIndex = Math.floor(Math.random() * charSet.length);
    password = password + charSet[randomIndex];
  }
  return password;


randomIndex=math is giving you a random number to use in the charset
charset = collection of what they say yes to
let charset = ""
if they say yes to lowercase, use concat
if theey say 
