/* ==========================================
   MENU PAGE - MENU.JS
   ========================================== */

// Initialize page
document.addEventListener("DOMContentLoaded", () => {
  displayMenuItems(menuItems);
  setupCategoryFilters();
  initializeMobileMenu();
});

/**
 * Display menu items in the grid
 * @param {array} items - Menu items to display
 */
function displayMenuItems(items) {
  const menuGrid = document.getElementById("menuGrid");
  clearChildren(menuGrid);

  if (items.length === 0) {
    menuGrid.innerHTML =
      '<p style="text-align: center; grid-column: 1/-1;">No items found in this category.</p>';
    return;
  }

  items.forEach((item) => {
    const menuCard = createMenuCard(item);
    menuGrid.appendChild(menuCard);
  });
}

/**
 * Create a menu card element
 * @param {object} item - Menu item data
 * @returns {HTMLElement} - Menu card element
 */
function createMenuCard(item) {
  const card = document.createElement("div");
  card.className = "menu-card";
  card.setAttribute("data-id", item.id);
  card.setAttribute("data-category", item.category);

  card.innerHTML = `
    <img src="${item.image}" alt="${item.name}" class="menu-card-image">
    <div class="menu-card-content">
      <span class="menu-card-category">${
        item.category.charAt(0).toUpperCase() + item.category.slice(1)
      }</span>
      <h3>${item.name}</h3>
      <p class="menu-card-description">${item.description}</p>
      <div class="menu-card-footer">
        <span class="menu-price">${formatCurrency(item.price)}</span>
        <button class="btn btn-primary" onclick="addToOrder(${item.id}, '${
    item.name
  }', ${item.price})">
          Add to Order
        </button>
      </div>
    </div>
  `;

  return card;
}

/**
 * Setup category filter buttons
 */
function setupCategoryFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const category = this.dataset.category;

      // Update active button
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      // Filter and display items
      const filteredItems =
        category === "all"
          ? menuItems
          : menuItems.filter((item) => item.category === category);

      displayMenuItems(filteredItems);
    });
  });
}

/**
 * Add item to order (stored in localStorage)
 * @param {number} itemId - Item ID
 * @param {string} itemName - Item name
 * @param {number} price - Item price
 */
function addToOrder(itemId, itemName, price) {
  let order = getFromStorage("currentOrder", []);
  const existingItem = order.find((item) => item.id === itemId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    order.push({ id: itemId, name: itemName, price: price, quantity: 1 });
  }

  saveToStorage("currentOrder", order);
  showAlert(`${itemName} added to your order!`, "success", 2000);
}

console.log("Menu.js loaded successfully");
