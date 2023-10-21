// const cocktailList = document.getElementById("cocktail-list");

// // Función para obtener detalles de una bebida por su ID
// function getCocktailDetails(cocktailId) {
//     const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`;
//     return fetch(url)
//         .then(response => response.json())
//         .then(data => data.drinks[0]);
// }

// // Función para mostrar una bebida en la lista
// function displayCocktail(cocktail) {
//     const listItem = document.createElement("li");
//     const ingredients = [];

//     // Iterar sobre las propiedades de ingredientes y medidas
//     for (let i = 1; i <= 15; i++) {
//         const ingredient = cocktail[`strIngredient${i}`];
//         const measure = cocktail[`strMeasure${i}`];
        
//         // Si no hay ingredientes ni medidas, se detiene la iteración
//         if (!ingredient && !measure) {
//             break;
//         }

//         ingredients.push(`${measure} ${ingredient}`);
//     }

//     listItem.innerHTML = `
//         <h2>${cocktail.strDrink}</h2>
//         <img src="${cocktail.strDrinkThumb}" alt="${cocktail.strDrink}" />
//         <p>Ingredientes: ${ingredients.join(', ')}</p>
//     `;
//     cocktailList.appendChild(listItem);
// }

// // Obtener 9 bebidas alcohólicas y mostrarlas
// for (let i = 11007; i < 11016; i++) {
//     getCocktailDetails(i)
//         .then(cocktail => {
//             displayCocktail(cocktail);
//         })
//         .catch(error => console.error("Error al obtener detalles de la bebida", error));
// }








// const cocktailList = document.getElementById("cocktail-list");

// // Función para obtener detalles de una bebida por su ID
// function getCocktailDetails(cocktailId) {
//     const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`;
//     return fetch(url)
//         .then(response => response.json())
//         .then(data => data.drinks[0]);
// }

// // Función para mostrar una bebida en la lista
// function displayCocktail(cocktail) {
//     const listItem = document.createElement("li");
//     const ingredients = [];

//     // Iterar sobre las propiedades de ingredientes y medidas
//     for (let i = 1; i <= 15; i++) {
//         const ingredient = cocktail[`strIngredient${i}`];
//         const measure = cocktail[`strMeasure${i}`];

//         // Si no hay ingredientes ni medidas, se detiene la iteración
//         if (!ingredient && !measure) {
//             break;
//         }

//         ingredients.push(`${measure} ${ingredient}`);
//     }

//     listItem.innerHTML = `
//         <h2>${cocktail.strDrink}</h2>
//         <img src="${cocktail.strDrinkThumb}" alt="${cocktail.strDrink}" />
//         <p>Ingredientes: ${ingredients.join(', ')}</p>
//     `;
//     cocktailList.appendChild(listItem);
// }

// // IDs de las bebidas que deseas mostrar (ejemplo)
// const cocktailIds = [11007, 178363, 17226, 15200, 17168, 11025, 11007, 11007, 11007];

// // Obtener y mostrar las bebidas específicas
// cocktailIds.forEach(cocktailId => {
//     getCocktailDetails(cocktailId)
//         .then(cocktail => {
//             displayCocktail(cocktail);
//         })
//         .catch(error => console.error("Error al obtener detalles de la bebida", error));
// });

// function displayCocktail(cocktail) {
//     const listItem = document.createElement("li");
//     const ingredients = [];

//     // Iterar sobre las propiedades de ingredientes y medidas
//     for (let i = 1; i <= 15; i++) {
//         const ingredient = cocktail[`strIngredient${i}`];
//         const measure = cocktail[`strMeasure${i}`];

//         // Si no hay ingredientes ni medidas, se detiene la iteración
//         if (!ingredient && !measure) {
//             break;
//         }

//         ingredients.push(`${measure} ${ingredient}`);
//     }

//     const instructions = cocktail.strInstructionsES || cocktail.strInstructions; // Utiliza instrucciones en español si están disponibles

//     listItem.innerHTML = `
//         <h2>${cocktail.strDrink}</h2>
//         <img src="${cocktail.strDrinkThumb}" alt="${cocktail.strDrink}" />
//         <p>Ingredientes: ${ingredients.join(', ')}</p>
//         <p>Instrucciones: ${instructions}</p>
//     `;

//     cocktailList.appendChild(listItem);
// }






const cocktailList = document.getElementById("cocktail-list");

// Función para obtener detalles de una bebida por su ID
function getCocktailDetails(cocktailId) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`;
    return fetch(url)
        .then(response => response.json())
        .then(data => data.drinks[0]);
}

// Función para mostrar una bebida en la lista
function displayCocktail(cocktail) {
    const listItem = document.createElement("li");
    const ingredients = [];

    // Iterar sobre las propiedades de ingredientes y medidas
    for (let i = 1; i <= 15; i++) {
        const ingredient = cocktail[`strIngredient${i}`];
        const measure = cocktail[`strMeasure${i}`];

        // Si no hay ingredientes ni medidas, se detiene la iteración
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

// IDs de las bebidas que deseas mostrar (ejemplo)
const cocktailIds = [13086, 17840, 13162, 17228, 15941, 17066, 16943, 11024, 15567, 14372, 11025, 16958];

cocktailIds.forEach(cocktailId => {
    getCocktailDetails(cocktailId)
        .then(cocktail => {
            displayCocktail(cocktail);
        })
        .catch(error => console.error("Error al obtener detalles de la bebida", error));
});