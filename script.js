// Assignment Code
var generateBtn = document.querySelector("#generate");
var generateCopy = document.querySelector("#copy")

// Write password to the #password input
function writePassword() {
  generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var lowerOptions = "abcdefghijklmnopqrstuvwxyz"
var upperOptions = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numericOptions = "1234567890"
var specialOptions = "!#$%&'()*+,-./:;<>=?@[]/^_`{|}~"
let optionsChoices = []
let text = ""

function generatePassword() {
  console.log("Generate The Password")

  // Here we define how long the password can be //

  let passLength = prompt("How Many Characters Do You Want In Your Password?")
  console.log(passLength);

  if (passLength > 7 && passLength < 129) {
    console.log(passLength);
  }
  else if (passLength < 7 || passLength > 129)
    if (passLength > 128) {
      alert("Password Must Not Exceed 128 Characters")
      generatePassword();
      return;
    }
    else if (passLength < 8) {
      alert("Password Must Be At Least 8 Characters")
      generatePassword();
      return;
    }

  // Allow options for types of characters here //

  // Lowercase: //
  let passLower = confirm("Do you want lower case characters included?")

  if (passLower == true) {
    console.log("Include lowercase: " + passLower);
    optionsChoices.push(lowerOptions);
  }
  else {
    console.log("Include lowercase: ")
  }

  // Uppercase: //
  let passUpper = confirm("Do you want upper case characters included in your password?")

  if (passUpper == true) {
    console.log("Include uppercase: " + passUpper);
    optionsChoices.push(upperOptions);
  }
  else {
    console.log("Include uppers")
  }

  // Numberical Characters: //
  let passNumeric = confirm("Do you want numbers included in your password?")

  if (passNumeric == true) {
    console.log("Include numbers: " + passNumeric);
    optionsChoices.push(numericOptions);
  }

  // Special Characters: //
  let passSpecial = confirm("Do you want special characters in your password?")

  if (passSpecial == true) {
    console.log("Include spacial characters: " + passSpecial);
    optionsChoices.push(specialOptions);
  }
  else {
    console.log("Include special characters: " + passSpecial);
  }


  // For Loop generating random characters - Text is defined as "" above //
  for (let i = 0; i < passLength; i++) {
    let optionsArray = optionsChoices[Math.floor(Math.random() * optionsChoices.length)];
    let passSelection = optionsArray.charAt(Math.floor(Math.random() * optionsArray.length));
    text += passSelection;
  }
  console.log(text)
}
// Put the generated password into #password input // 
function writePassword() {
  generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.textContent = text;

}

generateBtn.addEventListener("click", writePassword);

generateCopy.addEventListener("click", function(){
  let textthatsbeencopied = document.getElementById("password")
  textthatsbeencopied.select();
  document.execCommand("copy")
  alert("Password copied to clipboard")
});


