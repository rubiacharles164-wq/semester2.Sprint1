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

console.log("App.js loaded successfully");
