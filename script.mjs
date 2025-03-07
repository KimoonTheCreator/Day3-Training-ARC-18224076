document.addEventListener("DOMContentLoaded", async () => {
    const container = document.getElementById("recipe-container");

    try {
        const response = await fetch("/api/recipes");
        const recipes = await response.json();

        recipes.forEach(recipe => {
            const recipeElement = document.createElement("div");
            recipeElement.classList.add("recipe");

            recipeElement.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.name}">
                <h2>${recipe.name}</h2>
                <p>${recipe.description}</p>
                <strong>Bahan:</strong>
                <ul>${recipe.ingredients.map(ing => `<li>${ing}</li>`).join("")}</ul>
                <strong>Cara Memasak:</strong>
                <p>${recipe.instructions}</p>
            `;

            container.appendChild(recipeElement);
        });
    } catch (error) {
        console.error("Gagal mengambil data:", error);
    }
});
