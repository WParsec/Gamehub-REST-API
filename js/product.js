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


const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id")

const url = "https://api.rawg.io/api/games/" + id + "?key=54582cd735a340b89b17702eae51578b";

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

    const description = results.description;

    const sentences = description.split(".").filter((item, index) => {
        if (index < 3) {
            return item;
        }
    })

    background.style.backgroundImage = `url(${results.background_image})`;
    imageContainer.innerHTML = `<div class="product-image-div" style="background-image: url(${results.background_image});"></div>`
    productInfoUpper.innerHTML += ` <h1 class="product-name">${results.name}</h1>
                                    <p class="product-text">Rating: ${results.rating}/5</p>
                                    <p class="product-text">Genres: ${results.genres[0].name}, ${results.genres[1].name}</p>
                                    <div class="product-text">${sentences[0]}. ${sentences[1]}.</div>`


    thumbnailSection.innerHTML += `<div class="thumbnail-wrap">
    <div class="product-image-thumbnails" style="background-image: url(${results.background_image});"></div>
    <div class="product-image-thumbnails" style="background-image: url(${results.background_image_additional});"></div>
    <div class="product-image-thumbnails" style="background-image: url(${results.background_image});"></div>
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
let count = 0;

cartButton.onclick = function addToCart() {
    showCartSymbol();
    changeCartLink(id);
    count++;
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


// PLATFORM SELECT

function createOptions(results) {
    const select = document.querySelector(".platform-select");
    for (let i = 0; i < results.parent_platforms.length; i++) {
        let option = document.createElement('option');
        option.text = results.parent_platforms[i].platform.name;
        option.value = results.parent_platforms[i].platform.name;
        select.appendChild(option);
    }
}
