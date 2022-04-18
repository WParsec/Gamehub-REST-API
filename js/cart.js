const cartContainer = document.querySelector(".cart-container");
const cartImageDiv = document.querySelector(".cart-image-div");
const cartInfoFlex = document.querySelector(".cart-info-flex");
const breadcrumbs = document.querySelector(".breadcrumbs-product");
const checkoutButton = document.querySelector(".summary-checkout");



const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id")
const platform = params.get("platform")

const url = "https://api.rawg.io/api/games/" + id + "?key=54582cd735a340b89b17702eae51578b";

async function getGame() {
    try {
        const response = await fetch(url);
        const results = await response.json();

        console.log(results);

        console.log(results.parent_platforms)

        createHTML(results);

    }
    catch (error) {
        console.log(error)
    }
}
getGame();

function createHTML(results) {
    cartImageDiv.innerHTML += `<div class="cart-game-image" style="background-image: url(${results.background_image});"></div>`
    cartInfoFlex.innerHTML += `<div class="cart-info-upper">
                                <h2 class="cart-game-name">${results.name}</h2>
                              <p class="product-text">Rating: ${results.rating}/5</p>
                              <p class="product-text">Platform: ${platform}</p>
                              <p class="product-text">Condition: New</p>
                              </div>`

    breadcrumbs.innerHTML += `<a href="product.html?id=${results.id}" class="breadcrumb-link">${results.name}</a>
                              <a class="breadcrumb-link breadcrumb-current">Cart</a>
                              <a href="checkout.html?id=${results.id}" class="breadcrumb-link breadcrumb-future">Checkout</a>`

    checkoutButton.innerHTML = `<a href="checkout.html?id=${results.id}"><button class="cta-button">CHECKOUT</button></a>`
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