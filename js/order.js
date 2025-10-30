/* ==========================================
   ORDER PAGE - ORDER.JS
   ========================================== */

let currentOrder = [];

// Provincial tax rates for Canada
const PROVINCIAL_TAX_RATES = {
  AB: { rate: 0.05, name: "GST" },
  BC: { rate: 0.12, name: "GST + PST" },
  MB: { rate: 0.12, name: "GST + PST" },
  NB: { rate: 0.15, name: "HST" },
  NL: { rate: 0.15, name: "HST" },
  NS: { rate: 0.15, name: "HST" },
  ON: { rate: 0.13, name: "HST" },
  PE: { rate: 0.15, name: "HST" },
  QC: { rate: 0.14975, name: "GST + QST" },
  SK: { rate: 0.11, name: "GST + PST" },
  NT: { rate: 0.05, name: "GST" },
  NU: { rate: 0.05, name: "GST" },
  YT: { rate: 0.05, name: "GST" },
};

// Initialize page
document.addEventListener("DOMContentLoaded", () => {
  loadOrder();
  initializeOrderForm();
  initializeMobileMenu();
});

/**
 * Load order from localStorage and display
 */
function loadOrder() {
  currentOrder = getFromStorage("currentOrder", []);
  displayOrderItems();
  updateOrderSummary();
}

/**
 * Display order items
 */
function displayOrderItems() {
  const orderList = document.getElementById("orderList");
  clearChildren(orderList);

  if (currentOrder.length === 0) {
    orderList.innerHTML =
      '<p class="empty-cart">Your order is empty. <a href="menu.html">Browse the menu</a></p>';
    return;
  }

  currentOrder.forEach((item, index) => {
    const itemElement = createOrderItemElement(item, index);
    orderList.appendChild(itemElement);
  });
}

/**
 * Create order item element
 * @param {object} item - Order item
 * @param {number} index - Item index
 * @returns {HTMLElement} - Order item element
 */
function createOrderItemElement(item, index) {
  const itemElement = document.createElement("div");
  itemElement.className = "order-item";

  itemElement.innerHTML = `
    <div class="order-item-details">
      <div class="order-item-name">${item.name}</div>
      <div class="order-item-quantity">Quantity: 
        <input type="number" min="1" max="50" value="${item.quantity}" 
               onchange="updateItemQuantity(${index}, this.value)" 
               style="width: 50px; padding: 4px;">
      </div>
    </div>
    <div class="order-item-price">${formatCurrency(
      item.price * item.quantity
    )}</div>
    <button class="remove-item-btn" onclick="removeFromOrder(${index})" 
            title="Remove item">✕</button>
  `;

  return itemElement;
}

/**
 * Update item quantity
 * @param {number} index - Item index
 * @param {number} quantity - New quantity
 */
function updateItemQuantity(index, quantity) {
  const qty = parseInt(quantity);

  if (qty < 1 || qty > 50) {
    showAlert(
      qty < 1 ? "Quantity must be at least 1" : "Maximum quantity is 50",
      "warning"
    );
    displayOrderItems();
    return;
  }

  currentOrder[index].quantity = qty;
  saveToStorage("currentOrder", currentOrder);
  displayOrderItems();
  updateOrderSummary();
}

/**
 * Remove item from order
 * @param {number} index - Item index
 */
function removeFromOrder(index) {
  const itemName = currentOrder[index].name;
  currentOrder.splice(index, 1);
  saveToStorage("currentOrder", currentOrder);
  displayOrderItems();
  updateOrderSummary();
  showAlert(`${itemName} removed from order`, "success");
}

/**
 * Update order summary display
 */
function updateOrderSummary() {
  const subtotal = calculateSubtotal();

  // Get selected province for dynamic tax calculation
  const provinceSelect = document.getElementById("province");
  const selectedProvince = provinceSelect?.value || "ON";
  const taxInfo =
    PROVINCIAL_TAX_RATES[selectedProvince] || PROVINCIAL_TAX_RATES.ON;

  const tax = subtotal * taxInfo.rate;
  const total = subtotal + tax;

  // Update tax label dynamically
  const taxPercentage = (taxInfo.rate * 100).toFixed(2).replace(/\.?0+$/, "");
  document.getElementById(
    "taxLabel"
  ).textContent = `${taxInfo.name} (${taxPercentage}%):`;

  document.getElementById("subtotal").textContent = formatCurrency(subtotal);
  document.getElementById("tax").textContent = formatCurrency(tax);
  document.getElementById("total").textContent = formatCurrency(total);
}

/**
 * Calculate order subtotal
 * @returns {number} - Subtotal amount
 */
function calculateSubtotal() {
  return currentOrder.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
}

/**
 * Initialize order form
 */
function initializeOrderForm() {
  const orderForm = document.getElementById("orderForm");
  const calculateBtn = document.getElementById("calculateBtn");
  const clearBtn = document.getElementById("clearBtn");
  const provinceSelect = document.getElementById("province");

  calculateBtn.addEventListener("click", () => {
    if (currentOrder.length === 0) {
      showAlert("Your order is empty", "warning");
    } else {
      updateOrderSummary();
      showAlert("Total calculated!", "success", 1500);
    }
  });

  clearBtn.addEventListener("click", () => {
    if (confirm("Are you sure you want to clear your order?")) {
      currentOrder = [];
      saveToStorage("currentOrder", []);
      displayOrderItems();
      updateOrderSummary();
      showAlert("Order cleared", "success");
    }
  });

  // Update tax when province changes
  if (provinceSelect) {
    provinceSelect.addEventListener("change", updateOrderSummary);
  }

  // Add auto-formatting for phone number
  const phoneInput = document.getElementById("phone");
  if (phoneInput) {
    phoneInput.addEventListener("input", formatPhoneInput);
  }

  // Add auto-formatting for postal code
  const postalCodeInput = document.getElementById("postalCode");
  if (postalCodeInput) {
    postalCodeInput.addEventListener("input", formatPostalCodeInput);
  }

  orderForm.addEventListener("submit", handleOrderSubmit);
}

/**
 * Validate order form
 * @returns {object} - Validation result { isValid: boolean, errors: array }
 */
function validateOrderForm() {
  const errors = [];
  const fields = {
    fullName: document.getElementById("fullName").value.trim(),
    email: document.getElementById("email").value.trim(),
    phone: document.getElementById("phone").value.trim(),
    street: document.getElementById("street").value.trim(),
    city: document.getElementById("city").value.trim(),
    province: document.getElementById("province").value.trim(),
    postalCode: document.getElementById("postalCode").value.trim(),
  };

  // Check if order is not empty
  if (currentOrder.length === 0) {
    errors.push("Your order is empty. Please add items from the menu.");
  }

  // Validate each field
  if (!fields.fullName || fields.fullName.length < 2) {
    markFieldError(
      "fullName",
      !fields.fullName ? "Please enter your full name" : "Name too short"
    );
    errors.push("Full name is required (min 2 characters)");
  } else {
    clearFieldError("fullName");
  }

  if (!fields.email) {
    markFieldError("email", "Please enter your email");
    errors.push("Email address is required");
  } else if (!validateEmail(fields.email)) {
    markFieldError("email", "Invalid email format");
    errors.push("Invalid email format");
  } else {
    clearFieldError("email");
  }

  if (!fields.phone) {
    markFieldError("phone", "Please enter your phone number");
    errors.push("Phone number is required");
  } else if (!validatePhone(fields.phone)) {
    markFieldError("phone", "Invalid phone format");
    errors.push("Invalid phone format. Use 123-123-1234");
  } else {
    clearFieldError("phone");
  }

  if (!fields.street) {
    markFieldError("street", "Please enter your street address");
    errors.push("Street address is required");
  } else {
    clearFieldError("street");
  }

  if (!fields.city) {
    markFieldError("city", "Please enter your city");
    errors.push("City is required");
  } else {
    clearFieldError("city");
  }

  if (!fields.province) {
    markFieldError("province", "Please select your province");
    errors.push("Province is required");
  } else {
    clearFieldError("province");
  }

  if (!fields.postalCode) {
    markFieldError("postalCode", "Please enter your postal code");
    errors.push("Postal code is required");
  } else if (!validatePostalCode(fields.postalCode)) {
    markFieldError("postalCode", "Invalid postal code format");
    errors.push("Invalid postal code format (use A1A 1A1)");
  } else {
    clearFieldError("postalCode");
  }

  return { isValid: errors.length === 0, errors };
}

/**
 * Mark field as having an error
 * @param {string} fieldId - Field ID
 * @param {string} errorMessage - Error message
 */
function markFieldError(fieldId, errorMessage) {
  const field = document.getElementById(fieldId);
  const errorElement = document.getElementById(fieldId + "Error");
  field.classList.add("error");
  errorElement.textContent = errorMessage;
}

/**
 * Clear error from field
 * @param {string} fieldId - Field ID
 */
function clearFieldError(fieldId) {
  const field = document.getElementById(fieldId);
  const errorElement = document.getElementById(fieldId + "Error");
  field.classList.remove("error");
  errorElement.textContent = "";
}

/**
 * Handle order form submission
 * @param {Event} e - Form submit event
 */
function handleOrderSubmit(e) {
  e.preventDefault();

  // Validate form
  const validation = validateOrderForm();

  if (!validation.isValid) {
    showAlert(
      "Please fix the following errors:\n\n" + validation.errors.join("\n"),
      "error",
      4000
    );
    return;
  }

  // Calculate totals
  const subtotal = calculateSubtotal();
  const tax = subtotal * 0.13; // HST 13% for Ontario
  const total = subtotal + tax;

  // Gather order information
  const orderData = {
    items: currentOrder,
    customer: {
      fullName: document.getElementById("fullName").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      address: {
        street: document.getElementById("street").value,
        city: document.getElementById("city").value,
        province: document.getElementById("province").value,
        postalCode: document.getElementById("postalCode").value,
      },
    },
    orderDate: new Date().toISOString(),
    subtotal,
    tax,
    total,
  };

  // Save order to localStorage
  const orderHistory = getFromStorage("orderHistory", []);
  orderHistory.push(orderData);
  saveToStorage("orderHistory", orderHistory);

  // Show success message
  showAlert(
    "Thank you for your order! Your order has been confirmed.",
    "success",
    3000
  );

  // Clear form and order
  document.getElementById("orderForm").reset();
  currentOrder = [];
  saveToStorage("currentOrder", []);
  displayOrderItems();
  updateOrderSummary();
}

/**
 * Format phone number input as user types
 * Format: 123-123-1234
 */
function formatPhoneInput(event) {
  const input = event.target;
  let value = input.value.replace(/\D/g, ""); // Remove all non-digits

  // Limit to 10 digits
  if (value.length > 10) {
    value = value.slice(0, 10);
  }

  // Format as 123-123-1234
  let formattedValue = "";
  if (value.length > 0) {
    formattedValue = value.slice(0, 3);
  }
  if (value.length > 3) {
    formattedValue += "-" + value.slice(3, 6);
  }
  if (value.length > 6) {
    formattedValue += "-" + value.slice(6, 10);
  }

  input.value = formattedValue;
}

/**
 * Format postal code input as user types
 * Format: A1B 2C3
 */
function formatPostalCodeInput(event) {
  const input = event.target;
  let value = input.value.replace(/\s/g, "").toUpperCase(); // Remove spaces and convert to uppercase

  // Limit to 6 characters
  if (value.length > 6) {
    value = value.slice(0, 6);
  }

  // Format as A1B 2C3
  let formattedValue = "";
  if (value.length > 0) {
    formattedValue = value.slice(0, 3);
  }
  if (value.length > 3) {
    formattedValue += " " + value.slice(3, 6);
  }

  input.value = formattedValue;
}

console.log("Order.js loaded successfully");
