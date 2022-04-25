// RETRIEVING API

const gridContainer = document.querySelector(".grid-container");

// Consumer key = "ck_8f59d0ac6a2741b3f904f5864c1474aa1bdc892e"
// Consumer secret = "cs_5fb219e10c9e99bb26618c370e601285c0c1e8ff"

const url = "https://dev-spider.com/gamehubapi/wp-json/wc/v3/products?consumer_key=ck_8f59d0ac6a2741b3f904f5864c1474aa1bdc892e&consumer_secret=cs_5fb219e10c9e99bb26618c370e601285c0c1e8ff"

let results = [];

async function getGames() {
    try {
        const response = await fetch(url);
        results = await response.json();

        console.log(results);

        gridContainer.innerHTML = "";

        createHTML(results);

    }
    catch (error) {
        console.log(error)
    }
}
getGames();

// CREATE HTML

let game = [];

function createHTML(results) {
    for (let i = 0; i < results.length; i++) {
        gridContainer.innerHTML += `<a class="card" href="product.html?id=${results[i].id}">
                                        <div class="image-div" style="background-image: url(${results[i].images[0].src});"></div>
                                        <h3>${results[i].name}</h3>
                                        <span class="product-price-index">$${results[i].price}<span>
                                        </a>`

        if (i === 15) {
            break;
        }
    }
}

// HAMBURGER MENU

const hamburgerMenu = document.querySelector(".hamburger-menu");
const dropdownMenu = document.querySelector(".dropdown-menu");

hamburgerMenu.onclick = function displayMenu() {
    dropdownMenu.classList.toggle("dropdown-active");
};

document.onclick = function hideMenu() {
    if (!hamburgerMenu.contains(event.target)) {
        dropdownMenu.classList.remove("dropdown-active");
    }
}


// SORT BY 

const sortBySelect = document.querySelector("#sortOption");

// sortBySelect.addEventListener('change', function () {
//     console.log(sortBySelect.value);
//     if (sortBySelect.value === "alphabetical") {
//         console.log("checkpoint");
//         results.sort(
//             function (a, b) {
//                 if (a.name > b.name) {
//                     return 1;
//                 }
//                 else if (a.name < b.name) {
//                     return -1;
//                 }
//                 else {
//                     return 0;
//                 }
//             }
//         )
//         createHTML(results);
//     }
// });

