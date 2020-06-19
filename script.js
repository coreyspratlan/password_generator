// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


var numberArray = ["0","1","2","3","4","5","6","7","8","9"];
var specailCharacterArray = ["!","@","#","$","%","(","?"];
var littleLetterArray = ("abcdefghijklmnopqrstuvwxyz").split("");
var bigLetterArray = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ").split("");
var p = passwordArray

function generatePassword () {



var passwordLenghth = prompt ("Your password needs to be between 8 - 128 characters in length.  How many characters would you like?");
  if (8 < passwordLength.length < 128) { passwordLength.length = passwordArray.length;  
  }  // if the condition is true that the length is between 8 and 128 characters long, then the password length will be the length of the password array.
 

var littleLetter = confirm ("Would you like your password to include lowercase letters?");
  if { passwordArray.push(littleLetterArray);
  } // if the condition is true that the user wants to use lowercase letters, add lowercase letters to the password array.
// if false, null

var bigLetter = confirm ("Would you like your password to include uppercase letters?");
  if { passwordArray.push(bigLetterArray);
  } // if the condition is true that the user wants to use uppercase letters, add uppercase letters to the password array.
// if false, null

var specialCharacter = confirm ("Would you like your password to include special characters?");
  if {passwordArray.push(specialChracterArray);
  } // if the condition is true that the user wants to use special characters, add spceial characters to the password array.
// if false, null

var number = confirm ("Would you like your password to include numbers?");
  if {passwordArray.push(numberArray);
  } // if the condition is true that the user wants to use numbers, add numbers to the password array.



Math.floor(Math.random()*passwordLength.length)
// a whole number that is generated randomly needs to match the length of the number of characters chosen from the passwordLength prompt.


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
