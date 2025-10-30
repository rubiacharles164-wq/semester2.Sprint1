# Sunny Bites Café — Project Overview

## 🌞 About the Project

**Sunny Bites Café** is a responsive web application for a seasonal organic café in Toronto. The project is built with vanilla HTML5, CSS3, and JavaScript—no frameworks or build tools—making it lightweight and easy to maintain.

The application showcases the café's menu, allows customers to browse items, read reviews, and place orders online.

---

## 📂 Project Structure

# Sunny Bites Café — Project Overview

## 🌞 About the Project

**Sunny Bites Café** is a responsive web application for a seasonal organic café in Toronto. The project is built with vanilla HTML5, CSS3, and JavaScript—no frameworks or build tools—making it lightweight and easy to maintain.

The application showcases the café's menu, allows customers to browse items, read reviews, and place orders online.

---

## 📂 Project Structure

```
semester2.Sprint1/
├── index.html              # Home page (hero, specials carousel, reviews, about)
├── menu.html               # Menu page with filterable items
├── order.html              # Order form with cart summary
├── style.css               # Main stylesheet (layout, components, responsive base)
├── response.css            # Responsive CSS (mobile & tablet breakpoints)
├── README.md               # Project overview (this file)
└── js/
    ├── library.js          # Shared utilities (validation, storage, alerts, formatters)
    ├── menu-data.js        # Menu items dataset (breakfast, lunch, beverages, desserts)
    ├── menu.js             # Menu page logic & addToOrder() function
    ├── app.js              # Homepage logic (carousels, collapsible about, initialization)
    ├── reviews.js          # Reviews data
    └── order.js            # Order page form validation & processing
```

---

## 🎯 Key Features

### 1. **Home Page** (`index.html`)

- **Hero Section**: Welcomes visitors with call-to-action buttons
- **Specials Carousel**: Displays today's featured items (one per category)
  - Horizontal card layout with image, description, price, and order button
  - Navigation via arrows and interactive dots
  - Mobile-optimized (dots navigation on small screens)
- **About Section**: Two-column layout
  - Left: Collapsible seasonal café description with "Read More" modal
  - Right: Info cards (location, hours, contact)
- **Reviews Carousel**: Customer testimonials
  - Auto-rotating with manual navigation
  - Dots for quick navigation
  - Arrows hidden on mobile, dots visible

### 2. **Menu Page** (`menu.html`)

- Displays all menu items in a responsive grid
- Category filter buttons (All, Breakfast, Lunch, Beverages, Desserts)
- Consistent card layout with image, name, description, price, and "Add to Order" button
- Items can be added to cart for ordering

### 3. **Order Page** (`order.html`)

- Two-column layout:
  - **Left**: Current order items list + customer information form
  - **Right**: Order summary with subtotal, tax, and total
- Customer form collects:
  - Personal info (name, email, phone)
  - Delivery address (street, city, province, postal code)
- Form validation and formatting (phone, postal code)
- Place Order / Clear Order buttons
- Real-time price calculation

### 4. **Responsive Design**

- Mobile-first approach with breakpoints at 768px and 480px
- Carousels adapt (arrows hidden on mobile, dots used instead)
- Menu grid stacks to single column on small screens
- Form fields stack vertically on mobile
- Optimized for tablets, phones, and desktops

---

## 🛠️ Technology Stack

| Layer         | Technology                                       |
| ------------- | ------------------------------------------------ |
| **Markup**    | HTML5 (semantic, accessible)                     |
| **Styling**   | CSS3 (Flexbox, Grid, media queries, transitions) |
| **Scripting** | Vanilla JavaScript (ES6+, no dependencies)       |
| **Icons**     | Unicode emojis (☀️, 📍, ⏰, 📞, etc.)            |
| **Data**      | JSON dataset embedded in `menu-data.js`          |
| **Storage**   | Browser localStorage (order persistence)         |

---

## 📋 Core JavaScript Functions

### **library.js** (Utilities)

- `showAlert(message, type)` — Display notifications
- `validateEmail(email)` — Email validation
- `validatePhone(phone)` — Canadian phone format validation
- `validatePostalCode(code)` — Canadian postal code (A1A 1A1) validation
- `formatCurrency(amount)` — Format numbers as currency ($X.XX)
- `getFromStorage(key)` / `saveToStorage(key, data)` — localStorage helpers
- `initializeMobileMenu()` — Toggle mobile navigation menu

### **menu.js** (Menu & Orders)

- `renderMenuItems(categoryFilter)` — Display menu grid filtered by category
- `addToOrder(itemId, itemName, price)` — Add item to cart (shared by menu & specials carousel)
- Wires category filter buttons and menu item add buttons

### **app.js** (Homepage)

- **Specials Carousel**: `getSpecialsOfDay()`, `renderSpecialsCarousel()`, `nextSpecial()`, `prevSpecial()`
- **Reviews Carousel**: `initializeCarousel()`, `displayReview()`, `nextReview()`, `previousReview()`, autoplay logic
- **About Collapsible**: `initializeAboutCollapsibles()` — Makes the about paragraph collapsible with a modal overlay
- **Initialization**: Wires up carousels, event listeners, and collapsible behaviors on page load

### **order.js** (Order Processing)

- `validateOrderForm()` — Validates all fields
- `formatPhoneInput()` / `formatPostalCodeInput()` — Real-time field formatting
- `submitOrder()` — Process and store the order
- Calculates subtotal, tax, and total in real time
- Clears cart and validation on demand

### **reviews.js**

- `reviews` array — Customer testimonials data

### **menu-data.js**

- `menuItems` array — Complete menu dataset (70+ items across 4 categories)

---

## 🎨 Styling Approach

- **Colors**: Warm, inviting palette (greens, oranges, earth tones)
- **Typography**: Clean sans-serif fonts
- **Layout**: Flexbox and CSS Grid for responsive sections
- **Components**:
  - Buttons: Primary (CTA), Secondary (alternate), Tertiary
  - Cards: Menu items, info cards, carousel items
  - Carousels: Dot navigation, arrow buttons, auto-advance reviews
  - Forms: Fieldsets, labels, error messages, formatting
  - Modal: Overlay for collapsible about section

---

## 📱 Responsive Breakpoints

| Breakpoint           | Target  | Key Changes                                                            |
| -------------------- | ------- | ---------------------------------------------------------------------- |
| **480px and below**  | Mobile  | Stack to single column, hide carousel arrows, show dots, compact forms |
| **768px and below**  | Tablet  | 2-column layouts → stacked, menu grid to 2 columns, reduce padding     |
| **1024px and above** | Desktop | Full multi-column layouts, large images, side-by-side forms            |

---

## 🚀 Getting Started

1. **Open the project** — Navigate to the `semester2.Sprint1` folder
2. **Start with Home** — Open `index.html` in your browser
3. **Browse the Menu** — Navigate to `menu.html`
4. **Place an Order** — Go to `order.html`, add items, and fill the form
5. **Mobile Testing** — Resize browser or open DevTools device emulation to test responsiveness

### Key URLs

- Home: `index.html`
- Menu: `menu.html`
- Order: `order.html`

---

## 🔍 Notable Features

### Specials Carousel

- **One special per category** selected randomly each day
- **Horizontal card**: Image on left, info + price + order button on right
- **Mobile optimization**: Arrows hidden at ≤480px, dots visible
- **Order integration**: Uses shared `addToOrder()` function (DRY principle)

### About Collapsible

- **Seasonal description** that previews the first part (line-clamped)
- **"Read More" button** opens a modal overlay with the full text
- **Non-destructive**: Modal created dynamically by JavaScript

### Reviews Carousel

- **Auto-rotates** with 5-second intervals
- **Manual controls**: Arrow buttons and clickable dots
- **Mobile-friendly**: Arrows hidden, dots remain visible and functional

### Order Cart

- **Persistent storage**: Orders saved to localStorage
- **Real-time math**: Subtotal, tax (13% Ontario HST), and total calculated live
- **Form validation**: All fields validated with helpful error messages
- **Canadian focus**: Postal code and province fields validated/formatted for Canada

---

## ℹ️ Structured Data

This project uses [JSON-LD](https://json-ld.org/) embedded in the HTML `<head>` to provide structured data about Sunny Bites Café (address, phone, website, etc.) for search engines and rich results. The format follows [schema.org Restaurant](https://schema.org/Restaurant) standards for better SEO and discoverability.

---

## 📝 Code Quality & Standards

- **Semantic HTML**: Proper use of `<header>`, `<main>`, `<section>`, `<footer>`, `<form>`, etc.
- **Accessibility**: ARIA labels, alt text, proper heading hierarchy, keyboard navigation
- **DRY Principle**: Shared utilities in `library.js`, reused `addToOrder()` function
- **Responsive Design**: Mobile-first CSS with media queries
- **Progressive Enhancement**: Works without JavaScript (forms still submit)
- **Local Development**: No build tool or external dependencies required

---

## 🐛 Known Considerations

- **No Backend**: Orders are stored locally; production would need a server/database
- **Static Data**: Menu items are hardcoded in `menu-data.js`; production would fetch from an API
- **Validation**: Client-side only; server-side validation would be needed for production
- **Images**: Using Unsplash for hero image; menu item images referenced in dataset

---

## Summary

**Sunny Bites Café** is a complete, functional web app for an organic seasonal café. It demonstrates responsive design, vanilla JavaScript interactivity, form handling, DOM manipulation, and localStorage integration—all without frameworks or build tools. The codebase is well-organized, accessible, and ready for educational use or as a foundation for a real café website.

Happy coding! ☀️
