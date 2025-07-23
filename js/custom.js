// AOS Initialize
AOS.init();

// ==============================
// Typewriter Effect — About Us
// ==============================
document.addEventListener('DOMContentLoaded', () => {
  const about = document.getElementById('about-text');
  const fullText = about.textContent;
  about.textContent = '';
  let i = 0;

  function typeWriter() {
    if (i < fullText.length) {
      about.textContent += fullText.charAt(i++);
      setTimeout(typeWriter, 25);
    }
  }

  typeWriter();
});

// ==============================
// Hero Section — Slideshow Random
// ==============================
(() => {
  const hero = document.querySelector('.hero');
  const images = [
    'images/hero-bg1.jpg',
    'images/hero-bg2.jpg',
    'images/hero-bg3.jpg',
    'images/hero-bg4.jpg',
    'images/hero-bg5.jpg',
    'images/hero-bg6.jpg'
  ];
  let pool = [...images];

  function changeBackground() {
    if (pool.length === 0) pool = [...images];
    const index = Math.floor(Math.random() * pool.length);
    const selected = pool.splice(index, 1)[0];
    hero.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('${selected}')`;
  }

  changeBackground();
  setInterval(changeBackground, 3000);
})();

// ==============================
// Service Cards — Scroll & Click
// ==============================
(() => {
  const cards = document.querySelectorAll('.service-card');

  // Reveal on scroll
  window.addEventListener('scroll', () => {
    cards.forEach(card => {
      if (card.getBoundingClientRect().top < window.innerHeight - 50) {
        card.classList.add('show');
      }
    });
  });

  // Click highlight effect
  cards.forEach(card => {
    card.addEventListener('click', () => {
      cards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
    });
  });
})();

// ==============================
// Testimonials — Slide In on Scroll
// ==============================
(() => {
  const testimonials = document.querySelectorAll('.testimonial');

  window.addEventListener('scroll', () => {
    testimonials.forEach((t, i) => {
      if (t.getBoundingClientRect().top < window.innerHeight - 50 && !t.classList.contains('shown')) {
        t.classList.add('shown');
        t.style.transform = i % 2 === 0 ? 'translateX(-100px)' : 'translateX(100px)';
        setTimeout(() => {
          t.style.transition = 'all 0.6s';
          t.style.transform = 'translateX(0)';
          t.style.opacity = '1';
        }, 50);
      }
    });
  });
})();
