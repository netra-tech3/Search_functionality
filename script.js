// app.js

document.addEventListener("DOMContentLoaded", () => {
    const foodList = [
        { name: "Pizza" },
        { name: "Burger" },
        { name: "Pasta" },
        { name: "Salad" },
        { name: "Sushi" },
        { name: "Tacos" },
        { name: "Ramen" },
        { name: "Steak" }
    ];

    // only two steps needed for this functionality

    // 1-> filter the foodlist according each input value in the inout label
    //2->according to that functionlaity add  div child to root(food-list ) element 



    const searchInput = document.getElementById("search-input");
    const foodListContainer = document.getElementById("food-list");

    const displayFoodList = (foods) => {
        foodListContainer.innerHTML = "";
        foods.forEach(food => {
            const foodItem = document.createElement("div");
            foodItem.className = "food-item";
            foodItem.textContent = food.name;
            foodListContainer.appendChild(foodItem);
        });
    };
    
    searchInput.addEventListener("input", (e) => {
        const searchQuery = e.target.value.toLowerCase();
        const filteredFoods = foodList.filter(food => 
            food.name.toLowerCase().includes(searchQuery)
        );
        displayFoodList(filteredFoods);
    });

    // Display the full list initially
    displayFoodList(foodList);
});
