//global variables
let generateBtn = document.querySelector("#generate");


//CHOOSE CHARACTER LENGTH CODE
function passwordCharacterLength() {
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
    passwordCharacterType(characterLength); //pass this along
  }
}


//CHOOSE CHARACTER TYPES
function passwordCharacterType(characterLength) {

  let selectLowercaseChar = confirm("Do you want lowercase characters?");
  let selectUppercaseChar = confirm("Do you want uppercase characters?");
  let selectNumberChar = confirm("Do you want numeric characters?");
  let selectSpecialChar = confirm("Do you want special characters?");


  if (!selectLowercaseChar && !selectUppercaseChar && !selectNumberChar && !selectSpecialChar) { //if the user selects none
    alert("You must select at least one character type.");
    return null;
  }

    let masterArray = [selectLowercaseChar, selectUppercaseChar, selectNumberChar, selectSpecialChar];
    console.log(masterArray);

    generatePassword(characterLength, masterArray); //pass both along
  }


//GENERATE RANDOM PASSWORD FROM SELECTIONS
function generatePassword(characterLength, masterArray) {

  let lowercaseChar = "qwertyuiopasdfghjklzxcvbnm";
  let uppercaseChar = "QWERTYUIOPAsDFGHJKLZXCVBNM"; 
  let numberChar = "1234567890"; 
  let specialChar = "!@#$%^&*_+:<>";
  let possibleChoicesArray = [lowercaseChar, uppercaseChar, numberChar, specialChar];

  let randomArray = ""; //
  let officialPassword = ""; //create password to hold string


  for (let i = 0; i < possibleChoicesArray.length; i++) { //loop through
    if (masterArray[i]) { //if the current index is "true"
      randomArray = randomArray.concat(possibleChoicesArray[i]); //add the corresponding index
    }
  }
  console.log(randomArray);
  console.log(typeof randomArray);


  for (let i = 0; i < characterLength; i++) {
    officialPassword += randomArray.charAt(Math.floor(Math.random() * randomArray.length));
  }
  console.log(officialPassword);

    let passwordText = document.querySelector("#password");
    passwordText.value = officialPassword;
  }
  



//processes
//Add event listener to generate button
generateBtn.addEventListener("click", passwordCharacterLength);

