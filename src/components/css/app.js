let items = []; // Array to hold items

// Create function - Adds a new item to the list
function createItem() {
  const itemInput = document.getElementById("itemInput");
  const itemValue = itemInput.value.trim();
  if (itemValue) {
    items.push(itemValue);
    itemInput.value = ""; // Clear input
    displayItems();
  }
}

// Read and Display function - Shows the items in a list
function displayItems() {
  const itemList = document.getElementById("itemList");
  itemList.innerHTML = ""; // Clear the list before displaying

  items.forEach((item, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;

    // Edit button
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.onclick = () => updateItem(index);

    // Delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => deleteItem(index);

    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    itemList.appendChild(listItem);
  });
}

// Update function - Edits an existing item
function updateItem(index) {
  const newItem = prompt("Edit item:", items[index]);
  if (newItem) {
    items[index] = newItem.trim();
    displayItems();
  }
}

// Delete function - Removes an item from the list
function deleteItem(index) {
  items.splice(index, 1);
  displayItems();
}
