const breadcrumbs = document.querySelector(".breadcrumbs-product");


const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id")

const url = "https://api.rawg.io/api/games/" + id + "?key=54582cd735a340b89b17702eae51578b";

async function getGame() {
    try {
        const response = await fetch(url);
        const results = await response.json();

        console.log(results);

        createHTML(results);

    }
    catch (error) {
        console.log(error)
    }
}
getGame();

function createHTML(results) {

    console.log(results)

    breadcrumbs.innerHTML += `<a href="product.html?id=${results.id}" class="breadcrumb-link">${results.name}</a>
                              <a href="cart.html?id=${results.id}" class="breadcrumb-link">Cart</a>
                              <a href="checkout.html?id=${results.id}" class="breadcrumb-link breadcrumb-current">Checkout</a>`

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