



const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id")













// WELCOME MESSAGE

const welcomeDiv = document.querySelector(".welcome-message");
welcomeDiv.innerText = `Welcome home, ${id}`;

const accountName = document.querySelector(".account-name");
accountName.innerText = id





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