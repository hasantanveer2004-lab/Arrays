
// Create an array
let fruits = ["Apple", "Banana", "Mango"];

// Display array
function displayFruits() {

    let list = document.getElementById("fruitList");

    list.innerHTML = "";

    fruits.forEach(function(fruit) {

        let li = document.createElement("li");

        li.innerText = fruit;

        list.appendChild(li);

    });
}

// Add new fruit
function addFruit() {

    let input = document.getElementById("fruitInput");

    let fruitName = input.value.trim();

    if (fruitName !== "") {

        fruits.push(fruitName);

        input.value = "";

        displayFruits();
    }
}

// Initial display
displayFruits();
