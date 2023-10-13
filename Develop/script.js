//global variables
let generateBtn = document.querySelector("#generate");

//CHOOSE CHARACTER LENGTH CODE
function characterLength() {
  let characterLength = prompt("What is the length of your desired password? Enter a number.");
  characterLength = parseInt(characterLength);

  //min & max validation
  if (characterLength < 8) {
    alert("Length of password must be at least 8 characters. Please input a higher number.");
    return null;
  } else if (characterLength > 128) {
    alert("Length of password must be less than 128 characters. Please input a lower number.");
    return null;

  } else {

    console.log(characterLength); //characterLength is the # the user inputted
    characterType();
    generatePassword(characterLength); //pass the user input
  }
}


//CHARACTER TYPES
function characterType() {
  let wantLowercaseChar = "qwertyuiopasdfghjklzxcvbnm".split("").sort(); //creates array with each separate item
  let wantUppercaseChar = "QWERTYUIOPAsDFGHJKLZXCVBNM".split("").sort(); //creates array with each separate item
  let wantNumberChar = "1234567890".split("").sort(); //creates array with each separate item
  let wantSpecialChar = "!@#$%^&*_+:<>".split("").sort(); //creates array with each separate item
  let allCharactersArray = [wantLowercaseChar, wantUppercaseChar, wantNumberChar, wantSpecialChar];


  console.log(allCharactersArray);
  console.log(typeof allCharactersArray); // object
  generatePassword(allCharactersArray); //pass the possible options
}


//GENERATE RANDOM PASSWORD FROM SELECTIONS
function generatePassword(characterLength, allCharactersArray) {

  let selectLowercaseChar = confirm("Do you want lowercase characters?");
  let selectUppercaseChar = confirm("Do you want uppercase characters?");
  let selectNumberChar = confirm("Do you want numeric characters?");
  let selectSpecialChar = confirm("Do you want special characters?");

  if (!selectLowercaseChar && !selectUppercaseChar && !selectNumberChar && !selectSpecialChar) { //if the user selects none
    alert("You must select at least one character type.");
    return null;
  } else { //if the user selects something

    let randomArray = [allCharactersArray]; //create a new array object to hold what the user picked
    let array = [];
    console.log(typeof array); //object
    console.log(typeof randomArray); //object
    // allCharactersArray = "";
    
    // for (let i = 0; i < allCharactersArray.length; i++) { //loop through array of arrays ??????
    //   if (allCharactersArray[i]) { //if the user picked the current array
    //     randomArray = randomArray.concat(allCharactersArray[i]); //add that current array to the random array
    //   }
    // }
    
    //create password object to hold the string
    let officialPassword = "";
    
    // for (let i = 0; i < characterLength; i++) {

    // }
    //   for (let i = 0; i < int; i++) {
      //     officialPassword += randomArray.charAt(Math.floor(Math.random() * randomArray.length));
      //   }
      
    //   return officialPassword;
    
    
    
    //we want to pull data from array --> string
    // stringedVersion = allCharactersArray.toString();
    // console.log(stringedVersion);

  }
}







// // //-----------------------------sTARTER CODE & NOW COMBINE sO THEY ARE PAssING------------------------------------------------------------------------------

// // Write password to the #password input
// function writePassword() {
//   let passwordText = document.queryselector("#password");
//   let passwordCharacterLength = passwordCharacterLength();
//   if (passwordCharacterLength == null) {
//     return;
//   }
//   let arrayMaster = selectPasswordChar();
//   if (selectPasswordChar == null) {
//     return;
//   }
//   let finalPassword = generatePassword(passwordCharacterLength, arrayMaster);
//   passwordText.value = password;
// }


//processes
//Add event listener to generate button
generateBtn.addEventListener("click", characterLength);

