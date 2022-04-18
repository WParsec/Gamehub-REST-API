// RETRIEVING API

const gridContainer = document.querySelector(".grid-container");

const url = "https://api.rawg.io/api/games?key=54582cd735a340b89b17702eae51578b"

async function getGames() {
    try {
        const response = await fetch(url);
        const results = await response.json();

        console.log(results.results);

        gridContainer.innerHTML = "";

        for (let i = 0; i < results.results.length; i++) {
            const game = results.results;
            gridContainer.innerHTML += `<a class="card" href="product.html?id=${game[i].id}">
                                            <div class="image-div" style="background-image: url(${game[i].background_image});"></div>
                                            <h3>${game[i].name}</h3>
                                            </a>`

            if (i === 15) {
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