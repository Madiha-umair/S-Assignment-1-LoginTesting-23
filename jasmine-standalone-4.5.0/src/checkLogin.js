
function checkLogin(password ) {
    "use strict";
    var username = "Madiha";//set value of correct number
    var userpassword = "123";
    var newpass = md5Encrypt(userpassword);
   // console.log(newpass);
    console.log(userpassword);
    console.log(newpass);
    var argumrntpwd =  md5Encrypt(password);
    console.log(argumrntpwd);
     var bool = false;
    if (  newpass === argumrntpwd  ) {
        console.log(" if else working");
        bool = true;
        return "guess again";
}
console.log(" function working");

 return "thats it";
}







//Lab 4 Testing With Jasmine
/*function checkLogin(name,pwd) {
    "use strict";
    var username = name;//set value of correct number
    var userpassword = pwd;*/

//Output messages
  /*  var returnMessage = "";
    var noNumber = "A number was not input.";
    var noInput = "A value was not entered.";
    var outOfRange = "Way off! Pick between 1 and 10.";
    var correct = "You guessed it!";
    var validIncorrect = "Guess again.";

//Validate input and assign a return message
    if (isNaN(guess) === true) {
        returnMessage = noNumber;
        
    } else if (guess === "") {
        returnMessage = noInput;
        
    } else if (guess <= 1 || guess >= 10) {
        returnMessage = outOfRange;
        
    } 
    else {
        if ( name === username && pwd === userpassword) {
            returnMessage = correct;
        } 
        else {
            returnMessage = validIncorrect;
        }
    }

    return returnMessage;
}*/
