const form = document.querySelector("#contactForm");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const emailInput = document.querySelector("#email");
const subject = document.querySelector("#subject");
const firstNameError = document.querySelector(".first-name-error");
const lastNameError = document.querySelector(".last-name-error");
const emailError = document.querySelector(".email-error")
const subjectError = document.querySelector(".subject-error");
const submitSuccess = document.querySelector(".submit-success");

const button = document.querySelector("button");



form.addEventListener("submit", validateForm);


// function for validation of form

function validateForm(form) {
    form.preventDefault();

    validateName(firstName);
    validateLastName(lastName);
    validateSubject(subject);

    function checkEmail() {
        if (validateEmail(emailInput.value) !== true) {
            emailError.style.display = "block";
        }
        else {
            emailError.style.display = "none";
            return true;
        }
        validateEmail();
    }
    checkEmail();

    if (validateName(firstName) && validateLastName(lastName) && checkEmail() && validateSubject(subject)) {
        console.log("SUBMITTED");
        submitSuccess.innerHTML = `<p>Thank you for your submission!</p>`
    }
    else { console.log("NOT SUBMITTED") }
}






// function for inputs

function validateName(input) {
    if (!input.value.length) {
        firstNameError.style.display = "block";
    }
    else {
        firstNameError.style.display = "none";
        return true;
    }
}

function validateLastName(input) {
    if (!input.value.length) {
        lastNameError.style.display = "block";
    }
    else {
        lastNameError.style.display = "none";
        return true;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

function validateSubject(input) {
    if (input.value.length < 3) {
        subjectError.style.display = "block";
    }
    else {
        subjectError.style.display = "none";
        return true;
    }
}


// hamburger menu

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