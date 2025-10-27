/* ==========================================
   MENU DATA
   ========================================== */

const menuItems = [
  // Breakfast Items
  {
    id: 1,
    name: "Acai Power Bowl",
    category: "breakfast",
    description:
      "Organic acai base with granola, berries, coconut, and honey drizzle",
    price: 12.99,
    image:
      "https://images.unsplash.com/photo-1590080876949-5c6d8d5d49b2?w=300&h=300&fit=crop",
  },
  {
    id: 2,
    name: "Avocado Toast",
    category: "breakfast",
    description:
      "Whole grain toast with smashed organic avocado, cherry tomatoes, and herbs",
    price: 10.99,
    image:
      "https://images.unsplash.com/photo-1548521881-bedc539b2b85?w=300&h=300&fit=crop",
  },
  {
    id: 3,
    name: "Green Smoothie Bowl",
    category: "breakfast",
    description: "Spinach, kale, banana, coconut milk with fresh toppings",
    price: 11.99,
    image:
      "https://images.unsplash.com/photo-1590080876949-5c6d8d5d49b2?w=300&h=300&fit=crop",
  },
  {
    id: 4,
    name: "Organic Egg Scramble",
    category: "breakfast",
    description: "Free-range eggs with fresh vegetables, whole wheat toast",
    price: 9.99,
    image:
      "https://images.unsplash.com/photo-1612874742237-6526221fcf4f?w=300&h=300&fit=crop",
  },
  {
    id: 5,
    name: "Greek Yogurt Parfait",
    category: "breakfast",
    description: "Organic Greek yogurt, fresh berries, granola, and honey",
    price: 8.99,
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291840?w=300&h=300&fit=crop",
  },
  {
    id: 6,
    name: "Quinoa Breakfast Bowl",
    category: "breakfast",
    description:
      "Protein-packed quinoa with almond butter, banana, and cinnamon",
    price: 10.99,
    image:
      "https://images.unsplash.com/photo-1625949204848-f21d37d3c689?w=300&h=300&fit=crop",
  },

  // Lunch Items
  {
    id: 7,
    name: "Grilled Chicken Salad",
    category: "lunch",
    description:
      "Organic greens, grilled chicken breast, seasonal vegetables, vinaigrette",
    price: 13.99,
    image:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=300&h=300&fit=crop",
  },
  {
    id: 8,
    name: "Mediterranean Wrap",
    category: "lunch",
    description:
      "Whole wheat wrap with hummus, feta, tomatoes, cucumbers, olives",
    price: 11.99,
    image:
      "https://images.unsplash.com/photo-1609501676725-7186f017a4b1?w=300&h=300&fit=crop",
  },
  {
    id: 9,
    name: "Buddha Power Bowl",
    category: "lunch",
    description: "Quinoa, roasted vegetables, chickpeas, tahini dressing",
    price: 12.99,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=300&fit=crop",
  },
  {
    id: 10,
    name: "Organic Veggie Sandwich",
    category: "lunch",
    description: "Artisan bread with fresh vegetables, sprouts, and pesto mayo",
    price: 10.99,
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=300&h=300&fit=crop",
  },
  {
    id: 11,
    name: "Grilled Salmon Plate",
    category: "lunch",
    description: "Wild-caught salmon with roasted vegetables and quinoa",
    price: 15.99,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=300&fit=crop",
  },
  {
    id: 12,
    name: "Falafel Combo",
    category: "lunch",
    description: "Organic falafel, hummus, tabbouleh, pita bread",
    price: 11.99,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=300&fit=crop",
  },

  // Beverages
  {
    id: 13,
    name: "Green Detox Smoothie",
    category: "beverages",
    description: "Spinach, ginger, apple, celery, lemon juice",
    price: 7.99,
    image:
      "https://images.unsplash.com/photo-1553530666-ba2a7fc5c6dc?w=300&h=300&fit=crop",
  },
  {
    id: 14,
    name: "Tropical Mango Smoothie",
    category: "beverages",
    description: "Fresh mango, pineapple, coconut milk, banana",
    price: 7.99,
    image:
      "https://images.unsplash.com/photo-1572192619409-2e43fcc50e84?w=300&h=300&fit=crop",
  },
  {
    id: 15,
    name: "Berry Blast Smoothie",
    category: "beverages",
    description: "Mixed berries, Greek yogurt, honey, almond milk",
    price: 8.99,
    image:
      "https://images.unsplash.com/photo-1590553080323-9d69f3c87c11?w=300&h=300&fit=crop",
  },
  {
    id: 16,
    name: "Organic Cold Brew",
    category: "beverages",
    description: "Smooth, organic cold brew coffee with choice of milk",
    price: 4.99,
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=300&fit=crop",
  },
  {
    id: 17,
    name: "Matcha Latte",
    category: "beverages",
    description: "Organic matcha green tea powder with steamed milk",
    price: 5.99,
    image:
      "https://images.unsplash.com/photo-1571115174575-2c8bb2b274c3?w=300&h=300&fit=crop",
  },
  {
    id: 18,
    name: "Fresh Lemonade",
    category: "beverages",
    description: "Homemade lemonade with fresh lemons and organic agave",
    price: 4.99,
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=300&fit=crop",
  },

  // Desserts
  {
    id: 19,
    name: "Raw Chocolate Cake",
    category: "desserts",
    description: "Organic raw chocolate cake with cashew frosting",
    price: 7.99,
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=300&fit=crop",
  },
  {
    id: 20,
    name: "Vegan Banana Bread",
    category: "desserts",
    description: "Moist, plant-based banana bread with walnuts",
    price: 5.99,
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=300&fit=crop",
  },
  {
    id: 21,
    name: "Almond Butter Cookies",
    category: "desserts",
    description: "Gluten-free almond butter cookies with dark chocolate chips",
    price: 4.99,
    image:
      "https://images.unsplash.com/photo-1585080972057-c7fb3f8c4c1f?w=300&h=300&fit=crop",
  },
  {
    id: 22,
    name: "Organic Berry Cheesecake",
    category: "desserts",
    description: "No-bake cheesecake with organic berries and dates",
    price: 6.99,
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=300&fit=crop",
  },
  {
    id: 23,
    name: "Chia Seed Pudding",
    category: "desserts",
    description: "Organic chia seeds, coconut milk, topped with berries",
    price: 6.99,
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291840?w=300&h=300&fit=crop",
  },
  {
    id: 24,
    name: "Coconut Energy Balls",
    category: "desserts",
    description: "No-bake coconut, dates, and dark chocolate bites",
    price: 5.99,
    image:
      "https://images.unsplash.com/photo-1585080972057-c7fb3f8c4c1f?w=300&h=300&fit=crop",
  },
];

console.log("Menu data loaded successfully");
