const breadcrumbs = document.querySelector(".breadcrumbs-product");


const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id")

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