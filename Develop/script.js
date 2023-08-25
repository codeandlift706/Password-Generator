// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function declaration VVVVV
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // passwordText = object, sets the value of passwordText = password
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//------------------------------------------CHOOSE CHARACTER LENGTH CODE---------------------------------------------

  function generatePassword () {
    let characterLength = prompt("What is the length of your desired password?");
  
    if (characterLength < 8) {
      alert("Length of password must be at least 8 characters. Please input a different number.");
  
    return;
  
    } else if (characterlength > 128){
      alert("Length of password must be less than 128 characters. Please input a different number.");
  
    return;
  
    } else if (characterLength >= 8 && characterLength < 128) {
      alert("Got it! Now, answer the following questions to select which character type(s) you want to include in your password.");
    }
  
  }

//-------------------------------------------CHOOSE TYPE OF CHARACTER CODE------------------------------------------
//If selected, the character type will be added to the array

// RESOURCE FROM CLASS
    let generateBtn = document.querySelector("#generate");

  function writePassword() {
    let characterSelections = [];
    
    let SelectLowercaseChar = confirm("Do you want lowercase characters?"); 
    let SelectUppercaseChar = confirm("Do you want uppercase characters?"); 
    let SelectNumberChar = confirm("Do you want numeric characters?"); 
    let SelectSpecialChar = confirm("Do you want special characters?"); 

    let WantLowercaseChar = "qwertyuiopasdfghjklzxcvbnm".split("").sort();
    let WantUppercaseChar = "QWERTYUIOPASDFGHJKLZXCVBNM".split("").sort();
    let WantNumberChar = "1234567890".split("").sort();
    let WantSpecialChar = "!@#$%^&*_+:<>".split("").sort();
    
    if (SelectLowercaseChar) {
    characterSelections.concat(WantLowercaseChar); 
    }
    
    if (SelectUppercaseChar) {
    characterSelections.concat(WantUppercaseChar); 
    }
    
    if (SelectNumberChar) {
    characterSelections.concat(WantNumberChar); 
    }
    
    if (SelectSpecialChar) {
    characterSelections.concat(WantSpecialChar); 
    }
    

    return characterSelections[Math.floor(Math.random() * characterSelections.length)];
    
  }
  
  
  function generatePassword() {
    let characterSelections = CharacterOption();
    
    alert("Great!");  
  }
  
  generateBtn.addEventListener("click", writePassword)

//-----------------------------MATH TO PUT IT ALL TOGETHER--------------------------------------
  let characterSelections = "";

  for (let i = 0; i < characterLength; i++) {
    let randomArray = Math.floor(Math.random()) * characterSelection.length;
    password = password + characterSelection[randomArray];
  }
  return password;