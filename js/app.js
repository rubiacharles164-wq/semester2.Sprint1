/* ==========================================
   HOME PAGE - APP.JS
   ========================================== */

let currentReviewIndex = 0;
let carouselAutoplay;

// Initialize page
document.addEventListener("DOMContentLoaded", () => {
  initializeCarousel();
  initializeMobileMenu();
  setupScrollAnimations();
});

/**
 * Initialize the reviews carousel
 */
function initializeCarousel() {
  const carouselContent = document.getElementById("carouselContent");
  const carouselDots = document.getElementById("carouselDots");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  // Create dots
  reviews.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.className = "dot";
    dot.setAttribute("aria-label", `Review ${index + 1}`);
    dot.addEventListener("click", () => goToReview(index));
    carouselDots.appendChild(dot);
  });

  // Display the first review
  displayReview();

  // Button event listeners
  prevBtn.addEventListener("click", previousReview);
  nextBtn.addEventListener("click", nextReview);

  // Auto-play carousel every 5 seconds
  startAutoplay();

  // Pause on hover
  carouselContent.addEventListener("mouseenter", stopAutoplay);
  carouselContent.addEventListener("mouseleave", startAutoplay);
}

/**
 * Display the current review
 */
function displayReview() {
  const carouselContent = document.getElementById("carouselContent");
  const dots = document.querySelectorAll(".dot");
  const review = reviews[currentReviewIndex];

  // Update content
  carouselContent.innerHTML = `
    <div class="review-card">
      <p>"${review.text}"</p>
      <div class="review-author">- ${review.author}</div>
      <div class="review-rating">${review.rating}</div>
    </div>
  `;

  // Update active dot
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentReviewIndex);
  });
}

/**
 * Move to next review
 */
function nextReview() {
  currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
  displayReview();
}

/**
 * Move to previous review
 */
function previousReview() {
  currentReviewIndex =
    (currentReviewIndex - 1 + reviews.length) % reviews.length;
  displayReview();
}

/**
 * Go to specific review
 * @param {number} index - Review index
 */
function goToReview(index) {
  currentReviewIndex = index;
  displayReview();
  stopAutoplay();
  startAutoplay();
}

/**
 * Start carousel autoplay
 */
function startAutoplay() {
  stopAutoplay();
  carouselAutoplay = setInterval(nextReview, 5000);
}

/**
 * Stop carousel autoplay
 */
function stopAutoplay() {
  clearInterval(carouselAutoplay);
}

/**
 * Setup scroll animations
 */
function setupScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    }
  );

  // Observe elements for animation
  document
    .querySelectorAll(".info-card, .menu-card, .info-box")
    .forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      observer.observe(el);
    });
}

/**
 * Initialize Specials Carousel
 */
const specialsCategories = ["breakfast", "lunch", "beverages", "desserts"];
let specials = [];
let specialsIndex = 0;

function getSpecialsOfDay() {
  specials = specialsCategories
    .map((cat) => {
      const items = menuItems.filter((item) => item.category === cat);
      if (!items || items.length === 0) return null;
      return items[Math.floor(Math.random() * items.length)];
    })
    .filter(Boolean);
  specialsIndex = 0;
}

function renderSpecialsCarousel() {
  const container = document.getElementById("specialsCarousel");
  if (!container) return;

  // Render current special
  const special = specials[specialsIndex];
  container.innerHTML = `
    <div class="specials-horizontal-card">
      <div class="specials-image-wrapper">
        <img src="${special.image}" alt="${
    special.name
  }" class="menu-card-image" />
      </div>
      <div class="specials-info-wrapper">
        <h3>${special.name}</h3>
        <p>${special.description}</p>
        <div class="menu-card-category">${
          special.category.charAt(0).toUpperCase() + special.category.slice(1)
        }</div>
        <div class="specials-bottom-row">
          <div class="menu-price">$${special.price.toFixed(2)}</div>
          <button class="btn btn-primary specials-order-btn" onclick="addToOrder(${
            special.id
          }, '${special.name.replace(/'/g, "'")}', ${
    special.price
  })" aria-label="Order ${special.name}">Order</button>
        </div>
      </div>
    </div>
  `;
  // Render/update dots for specials carousel (similar to reviews)
  const dotsContainer = document.getElementById("specialsCarouselDots");
  if (dotsContainer) {
    dotsContainer.innerHTML = "";
    if (specials.length > 1) {
      specials.forEach((_, idx) => {
        const dot = document.createElement("button");
        dot.className = "dot";
        dot.setAttribute("aria-label", `Special ${idx + 1}`);
        dot.addEventListener("click", () => {
          specialsIndex = idx;
          renderSpecialsCarousel();
        });
        dotsContainer.appendChild(dot);
      });

      // Update active state
      const dots = dotsContainer.querySelectorAll(".dot");
      dots.forEach((d, i) => d.classList.toggle("active", i === specialsIndex));
    }
  }
}

function nextSpecial() {
  specialsIndex = (specialsIndex + 1) % specials.length;
  renderSpecialsCarousel();
}
function prevSpecial() {
  specialsIndex = (specialsIndex - 1 + specials.length) % specials.length;
  renderSpecialsCarousel();
}

function initializeSpecialsCarousel() {
  getSpecialsOfDay();
  if (!specials || specials.length === 0) return;
  renderSpecialsCarousel();
  const nextBtn = document.getElementById("specialsNextBtn");
  const prevBtn = document.getElementById("specialsPrevBtn");
  if (nextBtn) nextBtn.addEventListener("click", nextSpecial);
  if (prevBtn) prevBtn.addEventListener("click", prevSpecial);
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("specialsCarousel")) {
    initializeSpecialsCarousel();
  }
});

/**
 * Initialize collapsible About paragraphs
 */
function initializeAboutCollapsibles() {
  const aboutText = document.querySelector(".about-bottom .about-text");
  if (!aboutText) return;
  // Use only the first paragraph for the collapsible summary
  const p = aboutText.querySelector("p");
  if (!p) return;

  aboutText
    .querySelectorAll(".collapsible-toggle")
    .forEach((el) => el.remove());

  let modal = document.getElementById("aboutCollapsibleModal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "aboutCollapsibleModal";
    modal.className = "collapsible-modal";
    modal.setAttribute("aria-hidden", "true");
    modal.innerHTML = `
      <div class="collapsible-modal-backdrop" data-close></div>
      <div class="collapsible-modal-content" role="dialog" aria-modal="true">
        <button class="collapsible-modal-close" aria-label="Close">✕</button>
        <div id="aboutModalBody"></div>
      </div>
    `;
    document.body.appendChild(modal);
  }

  const modalBackdrop = modal.querySelector(".collapsible-modal-backdrop");
  const modalClose = modal.querySelector(".collapsible-modal-close");
  const modalBody = modal.querySelector("#aboutModalBody");

  function openModal(html) {
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    modalBody.innerHTML = html;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    modalBody.innerHTML = "";
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
  }

  modalBackdrop.addEventListener("click", closeModal);
  modalClose.addEventListener("click", closeModal);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  p.classList.add("collapsible-summary");

  const btn = document.createElement("button");
  btn.className = "btn btn-secondary collapsible-toggle";
  btn.type = "button";
  btn.textContent = "Read more";
  btn.setAttribute("aria-expanded", "false");
  btn.addEventListener("click", () => {
    openModal(p.innerHTML);
    btn.setAttribute("aria-expanded", "true");
  });

  p.after(btn);
}

// Initialize about collapsibles after DOM ready
document.addEventListener("DOMContentLoaded", initializeAboutCollapsibles);

console.log("App.js loaded successfully");
