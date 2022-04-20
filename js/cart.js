const cartContainer = document.querySelector(".cart-container");
const cartImageDiv = document.querySelector(".cart-image-div");
const cartInfoFlex = document.querySelector(".cart-info-flex");
const breadcrumbs = document.querySelector(".breadcrumbs-product");
const checkoutButton = document.querySelector(".summary-checkout");



const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id")
const platform = params.get("platform")

const url = "https://dev-spider.com/gamehubapi/wp-json/wc/v3/products/" + id + "?consumer_key=ck_8f59d0ac6a2741b3f904f5864c1474aa1bdc892e&consumer_secret=cs_5fb219e10c9e99bb26618c370e601285c0c1e8ff";

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
    cartImageDiv.innerHTML += `<div class="cart-game-image" style="background-image: url(${results.images[0].src});"></div>`
    cartInfoFlex.innerHTML += `<div class="cart-info-upper">
                                <h2 class="cart-game-name">${results.name}</h2>
                              <p class="product-text">Rating: ${results.attributes[0].options[0]}/5</p>
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