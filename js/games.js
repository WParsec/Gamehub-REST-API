const gridContainer = document.querySelector(".grid-container");

const url = "https://dev-spider.com/gamehubapi/wp-json/wc/v3/products?consumer_key=ck_8f59d0ac6a2741b3f904f5864c1474aa1bdc892e&consumer_secret=cs_5fb219e10c9e99bb26618c370e601285c0c1e8ff"

async function getGames() {
    try {
        const response = await fetch(url);
        const results = await response.json();

        console.log(results);

        gridContainer.innerHTML = "";

        for (let i = 0; i < results.length; i++) {
            const game = results;
            gridContainer.innerHTML += `<a class="card" href="product.html?id=${game[i].id}">
                                            <div class="image-div" style="background-image: url(${game[i].images[0].src});"></div>
                                            <h3>${game[i].name}</h3>
                                            </a>`
            if (i === 17) {
                break;
            }
        }
    }
    catch (error) {
        console.log(error)
    }
}
getGames();

// HAMBURGER MENU

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