// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordstor 
var character = {
  letters :"abcdefghijklmnopqrstuvwxyz",
  number:["0","1","2", "3", "4","5","6","7", "8", "9"],
 specialcharacter: "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~",
 Useramount: "",
 UpperOn: "OFF",
 specialcharacterON:"OFF",
 numberon:"OFF",
}
 //created empty array
// Write password to the #password input

function Userinput(){ // This function will create a series of prompts to the user to create the critearia
var charparm = window.prompt(" how many character do you need for password?"," choose between 8 to 128 character");
if (charparm >= 8 && charparm <= 128 ){
    character.Useramount = charparm;
      var upper = window.confirm("would you like to add Upper case letters to password? (select Cancel button for no and ok button for yes) ");
      var specchar = window.confirm( " would you like to add a special character to your password? (select Cancel button for no and ok button for yes)");
      var num = window.confirm(" would you like to add a number to your password? (select Cancel button for no and ok button for yes)" );

} else {
  window.alert("please use 8 to 128 character");
character.Useramount = -1;
return;
}
if(upper == true ){

     character.UpperOn = "ON";
     
    }
    
    if( specchar == true){

      character.specialcharacterON = "ON";
    }

    if( num == true){

      character.numberon = "ON";
    }

    // this will validate user response befoer creating password.
var result = window.confirm( " you selected:\n" + " Uppercase:  "+ character.UpperOn +" \nspecial character:  " + character.specialcharacterON + "\nNumbers:  " + character.numberon  + " \nis this OK?" )   
    if( result == false){

      window.alert (" please try to generate password again");
      character.Useramount = -1;
      return;
    }
    

}



function generatePassword(){  // this function will generate password based on user criteria by randomly picking items in array and storing them into a new array( which will be the user password) 
  //  two variable below converts string to array
var LetArray = character.letters.split("");
var letspecial = character.specialcharacter.split("");



for( var x = 0;x <= character.Useramount; x=x+1 ){ // using these condition will make sure that atleast one character will meet the user criteria.
var index = Math.floor(Math.random() * LetArray.length);

  if( x == 0 && character.UpperOn === "ON"){

 var passchar = LetArray[index].toUpperCase();
  passwordstor.push(passchar);

  }else if(x == character.Useramount && character.specialcharacterON === "ON"){
   index = Math.floor(Math.random() * letspecial.length);
 var passchar = letspecial[index];
  passwordstor.push(passchar);

  } else if (x == character.Useramount - 1 && character.numberon === "ON"){
     index = Math.floor(Math.random() * character.number.length);
    var passchar = character.number[index];
     passwordstor.push(passchar);
  }
  
  else{ 
    var passchar = LetArray[index];
  passwordstor.push(passchar);
  }




  } 
// next line of code will return variables to default state.
  
  character.UpperOn = "OFF";
  character.specialcharacterON = "OFF";
  character.numberon = "OFF"
return;

}





function writePassword() { // function used to write password and place in web app.
  Userinput();
   generatePassword(passwordstor = Array.of()); // create a empty array use to store password
  console.log(generatePassword);
  var passwordText = document.querySelector("#password");

  passwordText.value = passwordstor.join("");
return 
}





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
