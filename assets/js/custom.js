// ==============================
// AOS Initialize
// ==============================
AOS.init();

// ==============================
// Typewriter Effect — About Us
// ==============================
document.addEventListener('DOMContentLoaded', () => {
  const about = document.getElementById('about-text');
  if (!about) return;

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
// Service Cards — Scroll Reveal & Click Effect
// ==============================
(() => {
  const cards = document.querySelectorAll('.service-card');

  if (!cards.length) return;

  const revealOnScroll = () => {
    cards.forEach(card => {
      const top = card.getBoundingClientRect().top;
      if (top < window.innerHeight - 50) {
        card.classList.add('show');
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();

  cards.forEach(card => {
    card.addEventListener('click', () => {
      cards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
    });
  });
})();

// ==============================
// Testimonials — Slide-in Animation on Scroll
// ==============================
(() => {
  const testimonials = document.querySelectorAll('.testimonial');

  if (!testimonials.length) return;

  const animateTestimonials = () => {
    testimonials.forEach((t, i) => {
      const top = t.getBoundingClientRect().top;
      if (top < window.innerHeight - 50 && !t.classList.contains('shown')) {
        t.classList.add('shown');
        t.style.transform = i % 2 === 0 ? 'translateX(-100px)' : 'translateX(100px)';
        setTimeout(() => {
          t.style.transition = 'all 0.6s';
          t.style.transform = 'translateX(0)';
          t.style.opacity = '1';
        }, 50);
      }
    });
  };

  window.addEventListener('scroll', animateTestimonials);
  animateTestimonials();
})();
