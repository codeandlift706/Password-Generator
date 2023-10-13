//global variables
let generateBtn = document.querySelector("#generate");

// //------------------------------------------CHOOSE CHARACTER LENGTH CODE & CHARACTER CODE TYPE


function passwordCharacterLength() {
  let characterLength = prompt("What is the length of your desired password? Enter a number.");
  passwordCharacterLength = parseInt(passwordCharacterLength);

  if (characterLength < 8) {
    alert("Length of password must be at least 8 characters. Please input a higher number.");
    return null;
  } else if (characterLength > 128) {
    alert("Length of password must be less than 128 characters. Please input a lower number.");
    return null;

  } else {
    alert("Got it! Now, answer the following questions to select which character type(s) you want to include in your password.");

    console.log(characterLength);
    return characterLength; //the character length inputed
    selectPasswordChar();
  }
  
}

// //-------------------------------------------CHOOsE TYPE OF CHARACTER CODE
// //If selected, the character type will be added to the array

// RESOURCE FROM CLASS

function selectPasswordChar() {
  
  let selectLowercaseChar = confirm("Do you want lowercase characters?");
  let selectUppercaseChar = confirm("Do you want uppercase characters?");
  let selectNumberChar = confirm("Do you want numeric characters?");
  let selectSpecialChar = confirm("Do you want special characters?");

  if (!selectLowercaseChar && !selectUppercaseChar && !selectNumberChar && !selectSpecialChar) {
    alert("You must select at least one character type.");
    return null;
  }

  let masterArray = [selectLowercaseChar, selectUppercaseChar, selectNumberChar, selectSpecialChar];
  console.log(masterArray);

  console.log(masterArray);
  return masterArray; //the array of all characters
}


// //-----------------------------FORMULAs TO GENERATE THE PAssWORD----------------------------------------------------------

function generatePassword(int, array) {

  let wantLowercaseChar = "qwertyuiopasdfghjklzxcvbnm".split("").sort(); //creates array with each separate item
  let wantUppercaseChar = "QWERTYUIOPAsDFGHJKLZXCVBNM".split("").sort(); //creates array with each separate item
  let wantNumberChar = "1234567890".split("").sort(); //creates array with each separate item
  let wantSpecialChar = "!@#$%^&*_+:<>".split("").sort(); //creates array with each separate item
  let characterSelections = [wantLowercaseChar, wantUppercaseChar, wantNumberChar, wantSpecialChar];
  let randomArray = "";
  let officialPassword = "";

  for (let i = 0; i < characterSelections.length; i++) {
    if (array[i]) {
      randomArray = randomArray.concat(characterSelections[i]);
    }
  }

  for (let i = 0; i < int; i++) {
    officialPassword += randomArray.charAt(Math.floor(Math.random() * randomArray.length));
  }

  return officialPassword;
}

// //-----------------------------sTARTER CODE & NOW COMBINE sO THEY ARE PAssING------------------------------------------------------------------------------

// Write password to the #password input
function writePassword() {
  let passwordText = document.queryselector("#password");
  let passwordCharacterLength = passwordCharacterLength();
  if (passwordCharacterLength == null) {
    return;
  }
  let arrayMaster = selectPasswordChar();
  if (selectPasswordChar == null) {
    return;
  }
  let finalPassword = generatePassword(passwordCharacterLength, arrayMaster);
  passwordText.value = password;
}


//processes
//Add event listener to generate button
generateBtn.addEventListener("click", passwordCharacterLength);

