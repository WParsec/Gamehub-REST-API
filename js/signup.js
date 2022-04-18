const username = document.querySelector("#username");
const usernameError = document.querySelector(".login-username-error");

const password = document.querySelector("#password");
const passwordError = document.querySelector(".login-password-error");

const password2 = document.querySelector("#password2");
const password2Error = document.querySelector(".login-password2-error");

const button = document.querySelector("#signupButton");

const form = document.querySelector("#signupForm");

button.addEventListener("click", checkValidity);

function checkValidity() {
    event.preventDefault();

    if (!username.validity.valid) {
        usernameError.style.visibility = "visible";
        usernameError.innerText = username.validationMessage;
        username.style.border = "2px solid red";
    }
    else {
        usernameError.style.visibility = "hidden";
        username.style.border = "2px solid green";
    }

    if (!password.validity.valid) {
        passwordError.style.visibility = "visible";
        passwordError.innerText = password.validationMessage;
        password.style.border = "2px solid red";
    }
    else {
        passwordError.style.visibility = "hidden";
        password.style.border = "2px solid green";
    }

    if (!password2.validity.valid) {
        password2Error.style.visibility = "visible";
        password2Error.innerText = password2.validationMessage;
        password2.style.border = "2px solid red";
    }
    else {
        password2Error.style.visibility = "hidden";
        password2.style.border = "2px solid green";
    }

    console.log(password2.value)
    console.log(password.value)

    function verifyPassword(password, password2) {
        if (password.value === password2.value) {
            return true;
        }
        else {
            password2.style.border = "2px solid red";
            password2Error.innerText = "Password does not match";
            password2Error.style.visibility = "visible";
            return false;
        }
    }
    verifyPassword(password, password2);

    if (username.validity.valid && password.validity.valid && password2.validity.valid && verifyPassword(password, password2)) {
        console.log("submitted");
        location.href = "/account.html?id=" + username.value;
    }
}



// HAMBURGER

const hamburgerMenu = document.querySelector(".hamburger-menu");
const dropdownMenu = document.querySelector(".dropdown-menu");

hamburgerMenu.onclick = function displayMenu() {
    dropdownMenu.classList.toggle("dropdown-active");
};

document.onclick = function hideMenu() {
    console.log(event.target);
    if (!hamburgerMenu.contains(event.target)) {
        dropdownMenu.classList.remove("dropdown-active");
    }
}