

  // Initialize particles.js
  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 50,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle"
      },
      "opacity": {
        "value": 0.6,
        "random": true
      },
      "size": {
        "value": 5,
        "random": true
      },
      "line_linked": {
        "enable": false
      },
      "move": {
        "enable": true,
        "speed": 1.5,
        "direction": "none",
        "random": true,
        "straight": false,
        "bounce": false
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false
        },
        "onclick": {
          "enable": false
        }
      }
    },
    "retina_detect": true
  });

  document.addEventListener("DOMContentLoaded", () => {
  // Counter animation
  const counters = document.querySelectorAll(".counter");
  counters.forEach((counter) => {
    const update = () => {
      const target = +counter.getAttribute("data-target");
      const current = +counter.innerText.replace(/,/g, "") || 0;
      const inc = Math.ceil(target / 200);
      if (current < target) {
        counter.innerText = (current + inc).toLocaleString();
        setTimeout(update, 20);
      } else {
        counter.innerText = target.toLocaleString();
      }
    };
    update();
  });

  // === Flying dots animation ===
  const dotsContainer = document.querySelector(".dots"); // 🔑 define container

  function createDot() {
    const rect = dotsContainer.getBoundingClientRect();
    const dot = document.createElement("div");
    dot.className = "dot";

    // Random size (3px - 10px)
    const size = Math.random() * 7 + 3;
    dot.style.width = dot.style.height = `${size}px`;

    // Random start position inside container
    dot.style.left = `${Math.random() * (rect.width - size)}px`;
    dot.style.top = `${Math.random() * (rect.height - size)}px`;

    // Random angle + distance
    const angle = Math.random() * 2 * Math.PI; // 0 - 360°
    const distance = Math.random() * 200 + 50; // 50 - 250 px
    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance;

    // Random duration (2s - 6s)
    const duration = (Math.random() * 5 + 5).toFixed(2);

    dot.style.setProperty("--dx", `${dx}px`);
    dot.style.setProperty("--dy", `${dy}px`);
    dot.style.setProperty("--dur", `${duration}s`);

    dotsContainer.appendChild(dot);

    // Cleanup after animation ends
    setTimeout(() => dot.remove(), duration * 1000 + 500);
  }

  // Keep creating dots every 200ms
  setInterval(createDot, 200);
});



  
  /* ========== SIMPLE HORIZONTAL CAROUSEL (track/buttons must exist) ========== */
  (() => {
    const track = document.querySelector('.carousel-track');
    const nextBtn = document.querySelector('.btn-next');
    const prevBtn = document.querySelector('.btn-prev');
    if (!track || !nextBtn || !prevBtn) return;

    const slides = Array.from(track.children);
    if (!slides.length) return;

    let idx = 0;
    const update = () => { track.style.transform = `translateX(-${idx * 100}%)`; };

    nextBtn.addEventListener('click', () => { idx = (idx + 1) % slides.length; update(); });
    prevBtn.addEventListener('click', () => { idx = (idx - 1 + slides.length) % slides.length; update(); });

    setInterval(() => { idx = (idx + 1) % slides.length; update(); }, 5000);
  })();





  
       const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
      item.querySelector(".faq-question").addEventListener("click", () => {
        item.classList.toggle("active");

        // Close others when one is opened
        faqItems.forEach(other => {
          if (other !== item) {
            other.classList.remove("active");
          }
        });
      });
    });