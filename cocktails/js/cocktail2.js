const cocktailList = document.getElementById("cocktail-list");
function getCocktailDetails(cocktailId) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`;
    return fetch(url)
        .then(response => response.json())
        .then(data => data.drinks[0]);
}

function displayCocktail(cocktail) {
    const listItem = document.createElement("li");
    const ingredients = [];
    for (let i = 1; i <= 15; i++) {
        const ingredient = cocktail[`strIngredient${i}`];
        const measure = cocktail[`strMeasure${i}`];
        if (!ingredient && !measure) {
            break;
        }
        ingredients.push(`${measure} ${ingredient}`);
    }
    listItem.innerHTML = `
        <h2>${cocktail.strDrink}</h2>
        <img src="${cocktail.strDrinkThumb}" alt="${cocktail.strDrink}" />
        <p>Ingredientes: ${ingredients.join(', ')}</p>
        <p>Instrucciones: ${cocktail.strInstructionsES || cocktail.strInstructions}</p>
    `;
    cocktailList.appendChild(listItem); 
}

const cocktailIds = [13086, 13086, 13086, 13086, 13086, 13086, 13086, 13086, 13086, 13086, 13086, 13086];
cocktailIds.forEach(cocktailId => {
    getCocktailDetails(cocktailId)
        .then(cocktail => {
            displayCocktail(cocktail);
        })
        .catch(error => console.error("Error al obtener detalles de la bebida", error));
});