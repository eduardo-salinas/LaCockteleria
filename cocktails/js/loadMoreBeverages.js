const cocktailList = document.getElementById("cocktail-list");
const loadNewCocktailsButton = document.getElementById("load-new-cocktails");
const loadMoreBeveragesButton = document.getElementById("load-more-beverages"); // Referencia al botón "Más bebidas"

let currentCocktailPage = 1;
const cocktailsPerPage = 12;

// Función para obtener detalles de una bebida por su ID
function getCocktailDetails(cocktailId) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`;
    return fetch(url)
        .then(response => response.json())
        .then(data => data.drinks[0]);
}

// Función para mostrar una página de bebidas en la lista
function displayCocktailPage(page) {
    const start = (page - 1) * cocktailsPerPage;
    const end = start + cocktailsPerPage;
    const cocktailIds = [13086, 13086, 13086, 13086, 13086, 13086, 13086, 13086, 13086, 13086, 13086, 13086].slice(start, end);

    cocktailList.innerHTML = ""; // Borra las bebidas actuales

    cocktailIds.forEach(cocktailId => {
        getCocktailDetails(cocktailId)
            .then(cocktail => {
                displayCocktail(cocktail);
            })
            .catch(error => console.error("Error al obtener detalles de la bebida", error));
    });
}

// Cargar la primera página de bebidas al cargar la página
displayCocktailPage(currentCocktailPage);

loadNewCocktailsButton.addEventListener("click", () => {
    currentCocktailPage += 1;
    displayCocktailPage(currentCocktailPage);
});

loadMoreBeveragesButton.addEventListener("click", () => {
    // Agregar código para cargar más bebidas en un nuevo archivo JavaScript
    window.location.href = "loadMoreBeverages.js"; // Cambia el nombre del archivo según tus necesidades
});
