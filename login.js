var users = [];
var usersString = localStorage.getItem("users");
if (usersString == null) {

} else {
    users =JSON.parse(usersString);
}

var usernameElement = document.getElementById('username');
var passwordElement = document.getElementById('password');
var loginErrorAlertElement = document.getElementById('login-error-alert');
var loginSuccesAlertElement = document.getElementById('login-success-alert');

function onLogin(event) {
    event.preventDefault();
    var username = usernameElement.value;
    var password = passwordElement.value;

    var userLoggedIn = false;

    for (let index = 0; index < users.length; index++) {
        const user = user[index];
        if (user.username === username && user.password === password) {
            userLoggedIn = true;
            localStorage.setItem("logged-in-user-id", user.id);
            localStorage.setItem("logged-in-user-name", user.username);
            break;
        }

    }

    if (userLoggedIn){
        localStorage.setItem("show-success-login-message", '');

        loginSuccesAlertElement.innerHTML= "Dannie vvedeni pravilno";

        loginErrorAlertElement.style.display = 'none';
        loginSuccesAlertElement.style.display = 'block';
        setTimeout(() => {
            window.location.href = 'index.html';
        },500);

    } else {
        localStorage.removeItem("logged-in-user-id");
        localStorage.removeItem("logged-in-user-name");
        showLoginErrorMessage();
    }


}

function showLoginErrorMessage() {
    loginErrorAlertElement.innerHTML = 'Dannie vvedeni ne pravilno';
    loginErrorAlertElement.style.display = 'block';
} 