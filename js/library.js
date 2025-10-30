/* ==========================================
   LIBRARY.JS - REUSABLE UTILITY FUNCTIONS
   ========================================== */

/**
 * Display an alert message with auto-hide functionality
 * @param {string} message - The message to display
 * @param {string} type - Type of alert: 'success', 'error', 'warning'
 * @param {number} duration - Duration in milliseconds (default: 2000)
 */
function showAlert(message, type = "success", duration = 2000) {
  const alertBox = document.getElementById("alertBox");

  // Reset and set classes
  alertBox.className = `alert-box ${
    type === "error" ? "error" : type === "warning" ? "warning" : ""
  }`;
  alertBox.textContent = message;
  alertBox.style.display = "flex";

  // Auto hide after duration
  setTimeout(() => {
    alertBox.classList.add("hide");
    setTimeout(() => (alertBox.style.display = "none"), 300);
  }, duration);
}

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} - True if valid email format
 */
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Validate phone number (Canadian format)
 * @param {string} phone - Phone number to validate
 * @returns {boolean} - True if valid phone format
 */
function validatePhone(phone) {
  // Canadian phone format: (XXX) XXX-XXXX or XXX-XXX-XXXX
  return /^(\+?1)?[-.\s]?(\(?\d{3}\)?[-.\s]?)(\d{3})[-.\s]?(\d{4})$/.test(
    phone.trim()
  );
}

/**
 * Validate Canadian postal code
 * @param {string} postalCode - Postal code to validate
 * @returns {boolean} - True if valid postal code format
 */
function validatePostalCode(postalCode) {
  // Canadian postal code format: A1A 1A1 or A1A1A1
  return /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/.test(postalCode.trim());
}

/**
 * Format currency value (Canadian dollars)
 * @param {number} value - Value to format
 * @returns {string} - Formatted currency string
 */
function formatCurrency(value) {
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
  }).format(value);
}

/**
 * Save data to localStorage
 * @param {string} key - Storage key
 * @param {*} data - Data to store (will be JSON stringified)
 */
function saveToStorage(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error(`Error saving to localStorage: ${error}`);
  }
}

/**
 * Get data from localStorage
 * @param {string} key - Storage key
 * @param {*} defaultValue - Default value if key not found
 * @returns {*} - Retrieved data or default value
 */
function getFromStorage(key, defaultValue = null) {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error(`Error retrieving from localStorage: ${error}`);
    return defaultValue;
  }
}

/**
 * Remove all children from element
 * @param {HTMLElement} element - Target element
 */
function clearChildren(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

/**
 * Initialize mobile menu toggle (shared across pages)
 */
function initializeMobileMenu() {
  const menuToggle = document.getElementById("menuToggle");
  const nav = document.querySelector(".nav");

  if (!menuToggle || !nav) return;

  menuToggle.addEventListener("click", () => {
    const isActive = nav.classList.toggle("active");
    menuToggle.classList.toggle("active");
    menuToggle.setAttribute("aria-expanded", isActive);
  });

  // Close menu when a link is clicked
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
      menuToggle.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".header")) {
      nav.classList.remove("active");
      menuToggle.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}

console.log("Library.js loaded successfully");
