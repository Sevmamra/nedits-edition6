// AOS Initialize
AOS.init();

// ==============================
// Typewriter Effect — Hero Section
// ==============================
document.addEventListener('DOMContentLoaded', () => {
  const line1 = document.getElementById('typed-text-line1');
  const line2 = document.getElementById('typed-text-line2');
  const line3 = document.getElementById('typed-text-line3');

  const textLines = ["Welcome", "to", "Nedits Edition"];
  const elements = [line1, line2, line3];

  let currentLine = 0;
  let charIndex = 0;

  function typeNextChar() {
    if (currentLine >= textLines.length) return;

    const currentText = textLines[currentLine];
    elements[currentLine].textContent += currentText.charAt(charIndex);
    charIndex++;

    if (charIndex < currentText.length) {
      setTimeout(typeNextChar, 100);
    } else {
      currentLine++;
      charIndex = 0;
      setTimeout(typeNextChar, 300);
    }
  }

  typeNextChar();
});

// ==============================
// Mobile Navigation Toggle
// ==============================
document.getElementById('menu-toggle').addEventListener('click', () => {
  const nav = document.getElementById('mobileNav');
  nav.classList.toggle('show');
});

// ==============================
// Hero Section — Background Randomizer
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
// Services Reveal on Scroll & Click Highlight
// ==============================
(() => {
  const cards = document.querySelectorAll('.service-card');

  window.addEventListener('scroll', () => {
    cards.forEach(card => {
      if (card.getBoundingClientRect().top < window.innerHeight - 50) {
        card.classList.add('show');
      }
    });
  });

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
