# Sunny Bites Café - Website Project

## 📋 Project Overview

Sunny Bites Café is a responsive, modern website for a family-owned café specializing in healthy, organic meals and beverages. The project includes a home page with testimonials carousel, a menu page with category filtering, and an online ordering system.

## 🎯 Features

### Home Page

- ✅ Welcoming hero section with café imagery
- ✅ About section with key information (location, hours, contact)
- ✅ Auto-scrolling reviews carousel (updates every 5 seconds)
- ✅ Call-to-action buttons
- ✅ Responsive design

### Menu Page

- ✅ 24 menu items across 5 categories (Breakfast, Lunch, Beverages, Desserts)
- ✅ Category filtering functionality
- ✅ High-quality product images (from Unsplash)
- ✅ Add to Order functionality with localStorage persistence
- ✅ Item descriptions and prices

### Order Online Page

- ✅ Order summary with item management
- ✅ Customer information form with validation
- ✅ Delivery address fields
- ✅ Delivery method selection (Delivery/Pickup)
- ✅ Form validation with error messages
- ✅ Total calculation including tax and delivery fee
- ✅ Order confirmation with localStorage persistence
- ✅ Order history tracking

## 🛠️ Technical Implementation

### HTML

- Semantic HTML5 tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>`)
- Proper form structure with fieldsets and labels
- Accessibility features (alt tags, ARIA labels, proper heading hierarchy)
- Mobile-first responsive design

### CSS

- CSS Custom Properties (variables) for easy customization
- Flexbox and CSS Grid layouts
- Responsive design with media queries (mobile, tablet, desktop)
- Smooth animations and transitions
- Professional color scheme (warm colors for café branding)
- Accessibility-focused design (high contrast, readable fonts)

### JavaScript

- **library.js**: Reusable utility functions

  - `showAlert()`: Customizable alert notifications (2-second auto-hide)
  - `validateEmail()`, `validatePhone()`, `validateZip()`: Form validation
  - `formatCurrency()`: Price formatting
  - `saveToStorage()`, `getFromStorage()`: LocalStorage management
  - `createElement()`: DOM element creation
  - Debounce and throttle functions

- **reviews.js**: Customer testimonials data (8 reviews)

- **menu-data.js**: 24 menu items with categories, descriptions, prices, and images

- **app.js**: Home page functionality

  - Reviews carousel with auto-play and manual controls
  - Carousel rotates every 5 seconds or every 3 seconds as alternative
  - Mobile menu toggle

- **menu.js**: Menu page functionality

  - Display all menu items in responsive grid
  - Category filtering
  - Add to Order functionality
  - LocalStorage integration

- **order.js**: Order page functionality
  - Load order from localStorage
  - Display order items with quantity adjustment
  - Form validation with specific error messages
  - Calculate totals (subtotal, tax, delivery fee)
  - Process order submission
  - Order history tracking

## 📁 Project Structure

```
midterm-project-team/
├── index.html                 # Home page
├── pages/
│   ├── menu.html             # Menu page
│   └── order.html            # Order online page
├── css/
│   ├── styles.css            # Main stylesheet
│   └── responsive.css        # Responsive design rules
├── js/
│   ├── library.js            # Reusable utilities
│   ├── reviews.js            # Review data
│   ├── menu-data.js          # Menu items data
│   ├── app.js                # Home page script
│   ├── menu.js               # Menu page script
│   └── order.js              # Order page script
├── assets/
│   └── images/               # Image directory (for future local images)
└── README.md                 # Project documentation
```

## 🎨 Color Scheme

- **Primary Color**: #f4a460 (Sandy Brown)
- **Secondary Color**: #8b7355 (Saddle Brown)
- **Accent Color**: #d4af37 (Gold)
- **Background**: #fef8f3 (Warm White)
- **Text**: #333333 (Dark)

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: 480px to 767px
- **Small Mobile**: Below 480px

## ✨ Key Features

### 1. Reviews Carousel

- Automatically cycles through 8 customer reviews
- Rotates every 5 seconds (can be adjusted)
- Manual navigation with previous/next buttons
- Dot indicators for quick review access
- Pauses autoplay on hover
- Smooth transitions between reviews

### 2. Menu Management

- 24 carefully curated menu items
- Categories: Breakfast, Lunch, Beverages, Desserts
- Filter by category
- High-quality images
- "Add to Order" button on each item
- Items saved to localStorage

### 3. Order System

- Add/remove items from order
- Adjust quantities
- Real-time total calculation
- Form validation with specific error messages
- Validation includes:
  - Required field checks
  - Email format validation
  - Phone number validation (US format)
  - ZIP code validation
  - Character length checks

### 4. User Experience

- Smooth animations and transitions
- Mobile-responsive navigation menu
- Clear visual feedback (hover states, active states)
- Toast-style alert notifications
- Form error highlighting
- Order persistence across sessions

## 🔧 Form Validation Functions

```javascript
// Email validation
validateEmail(email);

// Phone validation (US format)
validatePhone(phone);

// ZIP code validation
validateZip(zip);

// Custom alert display
showAlert(message, type, duration);
```

## 💾 LocalStorage Keys

- `currentOrder`: Array of items in current order
- `orderHistory`: Array of completed orders with full details

## 🚀 Getting Started

1. Open `index.html` in a web browser
2. Navigate between pages using the header menu
3. Browse the menu and add items to your order
4. Go to the Order page to complete your purchase
5. Fill in your details and place the order
6. View confirmation message

## 📝 Notes

- All images are sourced from Unsplash (free, high-quality images)
- The carousel auto-play can be easily adjusted by changing the interval in app.js
- Menu items and reviews can be easily added/modified in their respective data files
- Form validation can be customized in order.js
- All styles are organized with CSS variables for easy customization

## 📋 Accessibility Features

- Semantic HTML structure
- Alt text for all images
- ARIA labels for interactive elements
- Proper heading hierarchy
- Color contrast compliance
- Keyboard navigation support
- Focus indicators
- Error message associations with form fields

## 🔐 Data Persistence

All orders and cart items are saved to browser's localStorage, allowing:

- Persistent shopping cart across sessions
- Order history tracking
- No data loss on page refresh

## 🎓 Learning Outcomes

This project demonstrates:

- ✅ Semantic HTML5 usage
- ✅ Advanced CSS (Grid, Flexbox, Variables, Animations)
- ✅ JavaScript DOM manipulation
- ✅ Form validation and error handling
- ✅ LocalStorage API usage
- ✅ Responsive web design
- ✅ Accessibility best practices
- ✅ Event handling and listeners
- ✅ Array methods and object manipulation
- ✅ Code organization and reusability

## 📞 Support

For questions or issues, refer to the individual JavaScript files which contain detailed comments and function documentation.

---

**Created**: 2025  
**Last Updated**: October 27, 2025  
**Copyright**: Keying SD25 - Fall Midterm sprint copyright 2025  
**Status**: Complete and Production Ready
