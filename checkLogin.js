/**
 * checkLogin function to validate user input .
 * Returns Boolean TRUE if the username and the password match with the known username and matching password.
 * @param {string} namevalue
 * @param {string} passwordvalue
 */
function checkLogin(namevalue, passwordvalue) {
    "use strict";
    var username = "Madiha";
    var userpassword = "123";//secret password

    var md5name = md5Encrypt(username);
    var md5password = md5Encrypt(userpassword);

    var name = md5Encrypt(namevalue);
    var password = md5Encrypt(passwordvalue);

    var returnmsg = '';
    if (namevalue === '' && passwordvalue === '' ) {
        returnmsg = 'No username and password entered.';
    }
    else if (namevalue === '' ) {
        returnmsg = 'No username entered.';
    }
    else if (passwordvalue === '' ) {
        returnmsg = 'No password entered.';
    }
    else  if (md5name === name &&  md5password === password) {
        returnmsg = true;
    }
    else if (md5name !== name &&  md5password === password) {
        returnmsg = 'Invalid Username or Password';
    }
    else if (md5name === name &&  md5password !== password) {
        returnmsg = 'Invalid Username or Password';
    }
    else if(md5name !== name && md5password !== password) {
        returnmsg = 'Invalid Username or Password';
    }
    return returnmsg;
    /* Line 29 till 37 can be replaced with a single statement!
    else{
        returnmsg = 'Invalid Username or Password';
    }*/
}//END checkLogin Function
