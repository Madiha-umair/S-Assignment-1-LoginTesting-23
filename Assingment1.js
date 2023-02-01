
window.onload = function loginForm() {
    "use strict";
    var formHandle = document.forms.login_information;
    var usernameValue = formHandle.UserName;
    var passwordValue = formHandle.Password;
    var Output = document.getElementById("output");

    formHandle.onsubmit = function loginInformationForm() {
        var result = checkLogin(usernameValue.value, passwordValue.value);
        Output.style.display = "block";
        if (result === true){
            var msg = "Welcome Back " + usernameValue.value + " !";
            Output.innerHTML = msg;
        }
        else{
            Output.innerHTML = result;
        }
    return false;
    };
};
