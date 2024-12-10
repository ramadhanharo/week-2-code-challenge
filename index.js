// Select DOM elements
const itemInput = document.getElementById("item-input");
const shoppingList = document.getElementById("shopping-list");

// Function to add an item to the list
function Itemtoadd() {
    const itemValue = itemInput.value.trim();

if (itemValue === "") {
    alert("Please enter an item and its price.");
    return;
}

// Create a new list item
const listed= document.createElement("li");
listItem.textContent = itemValue;

// Add a clear button to the list item
const clearButton = document.createElement("button");
clearButton.textContent = "Remove";
clearButton.style.marginLeft = "10px";
clearButton.onclick = () => listItem.remove();

listed.appendChild(clearButton);
shoppingList.appendChild(listItem);

// Clear the input field
itemInput.value = "";
}

// Function to clear the list
function clearList() {
    shoppingList.innerHTML = "";
}



// Event listeners
itemInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        Itemtoadd();
    }
});

