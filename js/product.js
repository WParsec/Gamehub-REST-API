const imageContainer = document.querySelector(".product-image-container");
const informationSection = document.querySelector(".product-information-section");
const productName = document.querySelector(".product-name");
const productText = document.querySelector(".product-text");
const thumbNails = document.querySelector(".thumbnails");
const background = document.querySelector("main");
const breadcrumbs = document.querySelector(".breadcrumbs-product");
const flexWrap = document.querySelector(".flex.wrap");
const thumbnailSection = document.querySelector(".thumbnail-section");
const productInfoUpper = document.querySelector(".product-info-upper");
const productPrice = document.querySelector(".product-price");


const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id")

const url = "https://dev-spider.com/gamehubapi/wp-json/wc/v3/products/" + id + "?consumer_key=ck_8f59d0ac6a2741b3f904f5864c1474aa1bdc892e&consumer_secret=cs_5fb219e10c9e99bb26618c370e601285c0c1e8ff";

async function getGame() {
    try {
        const response = await fetch(url);
        const results = await response.json();

        console.log(results)

        createOptions(results);
        createHTML(results);

    }
    catch (error) {
        console.log(error)
    }
}
getGame();


function createHTML(results) {

    background.style.backgroundImage = `url(${results.images[0].src})`;
    imageContainer.innerHTML = `<div class="product-image-div" style="background-image: url(${results.images[0].src});"></div>`
    productInfoUpper.innerHTML += ` <h1 class="product-name">${results.name}</h1>
                                    <p class="product-text">Genres: ${results.categories[0].name}, ${results.categories[1].name}</p>
                                    <div class="product-text">${results.description}</div>
                                    <span class="rating">Rating: ${results.attributes[0].options[0]}/5</span>`
    productPrice.innerText = `$${results.price}`


    thumbnailSection.innerHTML += `<div class="thumbnail-wrap">
    <div class="product-image-thumbnails" style="background-image: url(${results.images[0].src});"></div>
    <div class="product-image-thumbnails" style="background-image: url(${results.images[1].src});"></div>
    <div class="product-image-thumbnails" style="background-image: url(${results.images[2].src});"></div>
    </div>`

    breadcrumbs.innerHTML += `<a class="breadcrumb-link breadcrumb-current">${results.name}</a>
                              <a href="cart.html?id=${id}" id="cartLink2" class="breadcrumb-link breadcrumb-future">Go to cart ></a>`

};


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


// CHECKBOX 


const favoriteDiv = document.querySelector(".favorite-div");
const favoriteP = document.querySelector(".favorite-p");
const heartIcon = document.querySelector(".favorite");


favoriteDiv.addEventListener("click", favoriteFunction);

function favoriteFunction() {
    heartIcon.classList.toggle("favorite-checked");
    if (favoriteP.innerHTML === "Add to favorites") {
        favoriteP.innerHTML = "Added to favorites";
    }
    else {
        favoriteP.innerHTML = "Add to favorites";
    }
}




// ADD TO CART

const cartButton = document.querySelector(".add-to-cart-button");
const cartDiv = document.querySelector(".cart-div");
const selectedPlatform = document.getElementById('selectPlatform');
const select = document.querySelector(".platform-select");
let count = 0;

cartButton.onclick = function addToCart() {
    if (selectedPlatform.value === "not-selected") {
        unselectedValue();
    }
    else {
        showCartSymbol();
        changeCartLink(id);
        count++;
        select.style.border = "1px solid #0ED6D6";
    }
}

function showCartSymbol() {
    const breadcrumbFuture = document.querySelector(".breadcrumb-future");
    cartButton.innerHTML = "ADDED TO CART ✓";
    cartDiv.innerHTML += `<div class="item-added-symbol">${count + 1}</div>`;
    breadcrumbFuture.style.filter = "drop-shadow(0px 0px 10px cyan)"
    breadcrumbFuture.style.fontWeight = "bold";
}

function changeCartLink(id) {
    cartLink.href = "cart.html?id=" + id + "&platform=" + selectedPlatform.value;
    cartLink2.href = "cart.html?id=" + id + "&platform=" + selectedPlatform.value;
}

// IF NOT SELECTED PLATFORM

function unselectedValue() {
    select.style.border = "1px solid #ff443d";
}


// PLATFORM SELECT

function createOptions(results) {
    const select = document.querySelector(".platform-select");
    for (let i = 0; i < results.tags.length; i++) {
        let option = document.createElement('option');
        option.text = results.tags[i].name;
        option.value = results.tags[i].name;
        select.appendChild(option);
    }
}
