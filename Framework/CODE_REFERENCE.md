# Code Reference Guide - Sunny Bites Café

## 🎯 Key JavaScript Code Snippets

### 1. Alert System (library.js)

```javascript
// Display success alert (auto-hides after 2 seconds)
showAlert("Item added to your order!", "success", 2000);

// Display error alert
showAlert("Please fix the errors in your form", "error", 2000);

// Display warning alert
showAlert("Quantity must be at least 1", "warning", 2000);
```

### 2. Form Validation (library.js)

```javascript
// Validate email
validateEmail("user@example.com"); // returns true/false

// Validate phone (US format)
validatePhone("(555) 123-4567"); // returns true/false

// Validate ZIP code
validateZip("90210"); // returns true/false
validateZip("90210-1234"); // returns true/false
```

### 3. LocalStorage Usage (library.js)

```javascript
// Save data
const cartItems = [{ id: 1, name: "Item", price: 10 }];
saveToStorage("currentOrder", cartItems);

// Retrieve data
const cart = getFromStorage("currentOrder", []);

// Clear specific key
removeFromStorage("currentOrder");

// Clear all storage
clearAllStorage();
```

### 4. Carousel Implementation (app.js)

```javascript
// Initialize carousel
initializeCarousel();

// Navigate reviews
nextReview(); // Go to next review
previousReview(); // Go to previous review
goToReview(2); // Jump to specific review

// Control autoplay
startAutoplay(); // Start auto-rotation (every 5 seconds)
stopAutoplay(); // Stop auto-rotation
```

### 5. Add Item to Order (menu.js)

```javascript
// Called when "Add to Order" button is clicked
addToOrder(itemId, itemName, itemPrice);

// Example:
addToOrder(1, "Acai Power Bowl", 12.99);

// Shows alert and saves to localStorage
```

### 6. Order Management (order.js)

```javascript
// Load cart from storage
loadOrder();

// Display items
displayOrderItems();

// Update quantity
updateItemQuantity(index, newQuantity);

// Remove item
removeFromOrder(itemIndex);

// Calculate total
calculateTotal();
```

### 7. Form Validation (order.js)

```javascript
// Validate entire form
const validation = validateOrderForm();
// Returns: { isValid: boolean, errors: array }

if (validation.isValid) {
  // Process order
} else {
  // Show errors
  validation.errors.forEach((error) => console.log(error));
}
```

### 8. Handle Order Submission (order.js)

```javascript
// Automatically called on form submit
function handleOrderSubmit(e) {
  e.preventDefault();

  // Validates form
  // Saves to order history
  // Shows 2-second confirmation
  // Clears form
  // Resets cart
}
```

---

## 📊 Data Structures

### Menu Item Structure

```javascript
{
    id: 1,
    name: "Acai Power Bowl",
    category: "breakfast",
    description: "Organic acai base with granola, berries, coconut, and honey drizzle",
    price: 12.99,
    image: "https://images.unsplash.com/..."
}
```

### Order Item Structure

```javascript
{
    id: 1,
    name: "Acai Power Bowl",
    price: 12.99,
    quantity: 2
}
```

### Customer Order Structure

```javascript
{
    items: [
        { id: 1, name: "Item", price: 12.99, quantity: 2 },
        { id: 2, name: "Item", price: 8.99, quantity: 1 }
    ],
    customer: {
        fullName: "John Doe",
        email: "john@example.com",
        phone: "(555) 123-4567",
        address: {
            street: "123 Main St",
            city: "City",
            state: "CA",
            zip: "90210"
        },
        specialInstructions: "No onions please",
        deliveryMethod: "delivery" // or "pickup"
    },
    orderDate: "2025-10-27T12:30:00Z",
    subtotal: 22.97,
    tax: 2.297,
    deliveryFee: 5.00,
    total: 30.267
}
```

### Review Structure

```javascript
{
    text: "Absolutely love Sunny Bites! The smoothie bowls are incredibly fresh...",
    author: "Sarah Mitchell",
    rating: "★★★★★"
}
```

---

## 🎨 CSS Custom Properties (Variables)

Located in `css/styles.css`:

```css
:root {
  --primary-color: #f4a460; /* Sandy Brown - Buttons */
  --secondary-color: #8b7355; /* Saddle Brown - Text */
  --accent-color: #d4af37; /* Gold - Accents */
  --text-dark: #333333; /* Main text */
  --text-light: #666666; /* Secondary text */
  --background-light: #fef8f3; /* Warm White background */
  --background-white: #ffffff; /* Pure white */
  --border-color: #e0d5c7; /* Borders */
  --success-color: #4caf50; /* Success alerts */
  --error-color: #f44336; /* Error alerts */
  --warning-color: #ff9800; /* Warning alerts */

  --transition-speed: 0.3s;
  --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 8px rgba(0, 0, 0, 0.15);
  --shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.2);
}
```

### How to Customize Colors

```css
/* Change primary button color */
:root {
  --primary-color: #your-color;
}

/* All primary buttons will automatically update */
.btn-primary {
  background-color: var(--primary-color);
}
```

---

## 🔄 Function Flow Diagrams

### Add to Order Flow

```
User clicks "Add to Order"
    ↓
addToOrder(id, name, price) called
    ↓
Load currentOrder from localStorage
    ↓
Check if item already exists
    ├─ YES: Increase quantity
    └─ NO: Add new item
    ↓
Save updated order to localStorage
    ↓
Show confirmation alert
```

### Place Order Flow

```
User submits form
    ↓
handleOrderSubmit(e) called
    ↓
Prevent default form submission
    ↓
validateOrderForm()
    ├─ NOT VALID: Show errors, return
    └─ VALID: Continue
    ↓
Gather order data
    ↓
Load orderHistory from localStorage
    ↓
Add new order to history
    ↓
Save orderHistory back to localStorage
    ↓
Show confirmation alert (2 seconds)
    ↓
Clear form
    ↓
Reset order cart
    ↓
Reset total display
```

### Form Validation Flow

```
Form submit
    ↓
validateOrderForm()
    ↓
Check each field:
    ├─ fullName: required, min 2 chars
    ├─ email: required, valid format
    ├─ phone: required, valid format
    ├─ street: required
    ├─ city: required
    ├─ state: required, 2 chars
    ├─ zip: required, valid format
    └─ specialInstructions: optional
    ↓
For each error:
    ├─ Add error text to errors array
    ├─ Mark field with .error class
    └─ Display error message
    ↓
Return { isValid: boolean, errors: array }
```

### Carousel Auto-play Flow

```
Page loads
    ↓
initializeCarousel()
    ↓
Create review cards from reviews array
    ↓
Create dot indicators
    ↓
Setup click handlers
    ↓
startAutoplay()
    ↓
setInterval every 5000ms
    ↓
nextReview() called
    ↓
updateCarousel()
    ↓
User hovers on carousel → stopAutoplay()
    ↓
User leaves carousel → startAutoplay()
```

---

## 📱 Responsive Breakpoints in CSS

```css
/* Mobile (default styles) */
/* Applies to 360px and above */

/* Tablet (768px and below) */
@media (max-width: 768px) {
  /* Tablet-specific styles */
}

/* Mobile (480px and below) */
@media (max-width: 480px) {
  /* Mobile-specific styles */
}

/* Large Desktop (1200px and above) */
@media (min-width: 1200px) {
  /* Desktop-specific styles */
}
```

---

## 🧪 Common Testing Scenarios

### Test Adding Item

1. Open menu page
2. Click "Add to Order" on any item
3. See "Item added to your order!" message
4. Go to Order page
5. Verify item appears in cart

### Test Form Validation

1. Go to Order page
2. Fill only name field
3. Click "Place Order"
4. See "Email address is required" error
5. Verify form doesn't submit

### Test Phone Validation

1. Go to Order page
2. Enter "555-123-4567" in phone
3. Should accept (matches US format)
4. Enter "not-a-phone"
5. Should show error

### Test Cart Persistence

1. Go to Menu page
2. Add item to order
3. Refresh page
4. Go to Order page
5. Verify item still in cart

### Test Mobile Menu

1. Open page on mobile (< 768px)
2. Click hamburger menu
3. See navigation items
4. Click a link
5. Menu closes

---

## 🐛 Debugging Tips

### Check Console

```javascript
// View cart contents
console.log(getFromStorage("currentOrder", []));

// View order history
console.log(getFromStorage("orderHistory", []));

// Check for errors
// Open DevTools (F12 or Ctrl+Shift+I)
// Check Console tab for any errors
```

### Test Validation

```javascript
// Test email validation
validateEmail("test@example.com"); // true
validateEmail("invalid-email"); // false

// Test phone validation
validatePhone("(555) 123-4567"); // true
validatePhone("555-123-4567"); // true
validatePhone("invalid"); // false

// Test ZIP validation
validateZip("90210"); // true
validateZip("90210-1234"); // true
validateZip("902"); // false
```

### Manual Alert Testing

```javascript
// Test alert types
showAlert("Success!", "success");
showAlert("Error!", "error");
showAlert("Warning!", "warning");

// Test duration
showAlert("5 second alert", "success", 5000);
```

---

## 📚 Files Quick Reference

| File           | Purpose     | Key Functions                            |
| -------------- | ----------- | ---------------------------------------- |
| `library.js`   | Utilities   | showAlert, validate*, format*, storage\* |
| `reviews.js`   | Data        | reviews array                            |
| `menu-data.js` | Data        | menuItems array                          |
| `app.js`       | Home logic  | carousel, autoplay, navigation           |
| `menu.js`      | Menu logic  | filter, display, addToOrder              |
| `order.js`     | Order logic | validate, calculate, submit              |

---

## 🚀 Useful Commands

### View in Browser

```bash
# macOS - Open index.html
open index.html

# Linux/Windows - Open with default browser
firefox index.html
chrome index.html
```

### Start Local Server

```bash
# Python 3
python3 -m http.server 8000

# Node.js (requires npm)
npm install -g live-server
live-server
```

### Browser DevTools

```
Windows/Linux: F12 or Ctrl+Shift+I
macOS: Cmd+Option+I or Cmd+Shift+C
```

---

## 📖 Documentation Structure

- **README.md**: Complete project overview
- **PROJECT_GUIDELINES.md**: Technical requirements
- **QUICK_START.md**: Getting started guide
- **TESTING_CHECKLIST.md**: Testing procedures
- **CODE_REFERENCE.md**: This file - code snippets

---

## ✨ Pro Tips

1. **Customize Colors Easily**

   - All colors are CSS variables
   - Change one variable to theme entire site

2. **Add New Menu Items**

   - Just add to `menuItems` array in `menu-data.js`
   - Everything updates automatically

3. **Add Customer Reviews**

   - Add to `reviews` array in `reviews.js`
   - Carousel will include automatically

4. **Debug Form Issues**

   - Open DevTools Console
   - Check validation errors
   - View field error messages

5. **Test on Mobile**

   - Use browser DevTools (Ctrl+Shift+I)
   - Toggle device toolbar (Ctrl+Shift+M)
   - Test all breakpoints

6. **Performance Tips**
   - Images load from CDN (no local storage needed)
   - LocalStorage is instant
   - No database queries (all client-side)

---

**Last Updated**: October 27, 2025  
**Copyright**: Keying SD25 - Fall Midterm sprint copyright 2025  
**Status**: Ready for Reference  
**Version**: 1.0
