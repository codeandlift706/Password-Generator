let generateBtn = document.querySelector("#generate");

//------------------------------------------CHOOSE CHARACTER LENGTH CODE---------------------------------------------

function PasswordCharacterLength () {
  let characterLength = prompt("What is the length of your desired password? Enter a number.");
  PasswordCharacterLength = parseInt(PasswordCharacterLength);

    if (characterLength < 8) {
      alert("Length of password must be at least 8 characters. Please input a higher number.");
      return;
    } else if (characterLength > 128) {
      alert("Length of password must be less than 128 characters. Please input a lower number.");
      return;
    } else (characterLength >= 8 && characterLength < 128); {
      alert("Got it! Now, answer the following questions to select which character type(s) you want to include in your password.");
    }
      return PasswordCharacterLength;
  }

//-------------------------------------------CHOOSE TYPE OF CHARACTER CODE------------------------------------------
//If selected, the character type will be added to the array

// RESOURCE FROM CLASS

function SelectPasswordChar () {
  
  let SelectLowercaseChar = confirm("Do you want lowercase characters?"); 
  let SelectUppercaseChar = confirm("Do you want uppercase characters?"); 
  let SelectNumberChar = confirm("Do you want numeric characters?"); 
  let SelectSpecialChar = confirm("Do you want special characters?"); 
  
  if (!SelectLowercaseChar && !SelectUppercaseChar && !SelectNumberChar && !SelectSpecialChar) {
    alert("You must select at least one character type.");
    return null;
  }

}

//-----------------------------FORMULAS TO GENERATE THE PASSWORD----------------------------------------------------------

function generatePassword (int, array) {

  let WantLowercaseChar = "qwertyuiopasdfghjklzxcvbnm".split("").sort();
  let WantUppercaseChar = "QWERTYUIOPASDFGHJKLZXCVBNM".split("").sort();
  let WantNumberChar = "1234567890".split("").sort();
  let WantSpecialChar = "!@#$%^&*_+:<>".split("").sort();
  let characterSelections = [WantLowercaseChar, WantUppercaseChar, WantNumberChar, WantSpecialChar];
  let randomArray = "";
  let officialPassword = "";

  for (let i = 0; i < characterSelections.length; i++) {
    if (array[i]){ 
      randomArray = randomArray.concat(characterSelections[i]);
    }
    }

  for (let i = 0; i < int; i++) {
    officialPassword += randomArray.charAt(Math.floor(Math.random() * randomArray.length));
    }

  return officialPassword;
  }

//-----------------------------STARTER CODE & NOW COMBINE SO THEY ARE PASSING------------------------------------------------------------------------------

// Write password to the #password input
function writePassword() {
  let passwordText = document.querySelector("#password");
  let PasswordCharacterLength = PasswordCharacterLength();
    if(PasswordCharacterLength == null) {
      return;
    }
  let arrayMaster = SelectPasswordChar();
    if(SelectPasswordChar == null) {
      return;
  } 
  let finalPassword = generatePassword(PasswordCharacterLength, arrayMaster);
  passwordText.value = password;
}

//Add event listener to generate button
generateBtn.addEventListener("click", PasswordCharacterLength);