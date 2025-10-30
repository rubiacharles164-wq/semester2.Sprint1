/* reviews.js
   Contains reviews data and carousel logic.
   Exposes window.initCarousel(options) to initialize.

   Accessibility features:
   - testimonial article has aria-live="polite" so screen readers announce changes
   - carousel region has role and tabindex so it can be focused
   - buttons have aria-labels
   - indicators are keyboard-focusable (buttons)
*/

(function () {
    // Sample reviews array - replace or extend as needed
    const reviews = [
      {
        id: 1,
        name: "Ava Turner",
        location: "Springfield",
        rating: 5,
        text: "The croissants are the best I've had outside Paris — flaky and buttery every time.",
        avatar: "images/home-1.jpg"
      },
      {
        id: 2,
        name: "Miguel Santos",
        location: "Downtown",
        rating: 5,
        text: "Great coffee, friendly staff, and a cozy corner to work from. Highly recommended!",
        avatar: "images/home-2.jpg"
      },
      {
        id: 3,
        name: "Rina Patel",
        location: "Riverside",
        rating: 4,
        text: "Lovely place with an excellent selection of pastries. The almond tart is divine.",
        avatar: "images/home-3.jpg"
      }
    ];
  
    // Utility: safely find element
    function $(sel, ctx = document) { return ctx.querySelector(sel); }
    function $all(sel, ctx = document) { return Array.from(ctx.querySelectorAll(sel)); }
  
    // Carousel implementation
    function createCarousel({ carouselSelector, prevSelector, nextSelector, indicatorsSelector, interval = 3000 }) {
      const carousel = document.querySelector(carouselSelector);
      if (!carousel) return;
  
      const prevBtn = document.querySelector(prevSelector);
      const nextBtn = document.querySelector(nextSelector);
      const indicatorsWrap = document.querySelector(indicatorsSelector);
      const windowEl = carousel.querySelector('.carousel-window');
      const testimonialEl = carousel.querySelector('.testimonial');
  
      let current = 0;
      let timer = null;
      let paused = false;
  
      function render(index) {
        const r = reviews[index];
        if (!r) return;
  
        // Fade out/in classes for smooth transitions
        testimonialEl.classList.add('fade-out');
        setTimeout(() => {
          const img = testimonialEl.querySelector('.testimonial-avatar');
          const quote = testimonialEl.querySelector('.testimonial-text');
          const author = testimonialEl.querySelector('.testimonial-author');
          const location = testimonialEl.querySelector('.testimonial-location');
  
          if (img) {
            img.src = r.avatar;
            img.alt = `Portrait of ${r.name}`;
          }
          if (quote) {
            quote.textContent = r.text;
          }
          if (author) author.textContent = r.name;
          if (location) location.textContent = r.location;
  
          // Update indicators selected state
          if (indicatorsWrap) {
            const buttons = indicatorsWrap.querySelectorAll('button');
            buttons.forEach((b, i) => b.setAttribute('aria-selected', (i === index).toString()));
          }
  
          testimonialEl.classList.remove('fade-out');
        }, 180); // match CSS transition timing
      }
  
      function next() {
        current = (current + 1) % reviews.length;
        render(current);
      }
  
      function prev() {
        current = (current - 1 + reviews.length) % reviews.length;
        render(current);
      }
  
      function goTo(i) {
        current = i % reviews.length;
        render(current);
      }
  
      function start() {
        stop();
        timer = setInterval(() => {
          if (!paused) next();
        }, interval);
      }
  
      function stop() {
        if (timer) {
          clearInterval(timer);
          timer = null;
        }
      }
  
      // Build indicators
      if (indicatorsWrap) {
        indicatorsWrap.innerHTML = '';
        reviews.forEach((r, i) => {
          const btn = document.createElement('button');
          btn.type = 'button';
          btn.title = `Show review ${i + 1}`;
          btn.setAttribute('aria-selected', (i === 0).toString());
          btn.addEventListener('click', () => {
            goTo(i);
            // reset timing so users get full interval after manual selection
            start();
          });
          btn.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              btn.click();
            }
          });
          indicatorsWrap.appendChild(btn);
        });
      }
  
      // Hook up buttons
      if (nextBtn) nextBtn.addEventListener('click', () => { next(); start(); });
      if (prevBtn) prevBtn.addEventListener('click', () => { prev(); start(); });
  
      // Pause on hover/focus for accessibility
      carousel.addEventListener('mouseenter', () => paused = true);
      carousel.addEventListener('mouseleave', () => paused = false);
      carousel.addEventListener('focusin', () => paused = true);
      carousel.addEventListener('focusout', () => paused = false);
  
      // Keyboard navigation
      carousel.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') { next(); start(); }
        if (e.key === 'ArrowLeft') { prev(); start(); }
      });
  
      // Initial render and start rotation
      render(0);
      start();
  
      // Expose controls for tests
      return {
        goTo,
        next,
        prev,
        stop,
        start,
        getCurrent: () => current,
        getReviewsCount: () => reviews.length
      };
    }
  
    // Public init function
    window.initCarousel = function (options = {}) {
      // default selectors used in markup above
      const opts = Object.assign({
        carouselSelector: '#testimonial-carousel',
        prevSelector: '#carousel-prev',
        nextSelector: '#carousel-next',
        indicatorsSelector: '#carousel-indicators',
        interval: 3000
      }, options);
  
      return createCarousel(opts);
    };
  
    // Export reviews for potential tests or other scripts
    window.__REVIEWS_DATA__ = reviews;
  })();