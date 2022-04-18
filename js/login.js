const username = document.querySelector("#username");
const usernameError = document.querySelector(".login-username-error");

const password = document.querySelector("#password");
const passwordError = document.querySelector(".login-password-error");

const button = document.querySelector("#loginButton");

const form = document.querySelector("#loginForm");

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

    if (username.validity.valid && password.validity.valid) {
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