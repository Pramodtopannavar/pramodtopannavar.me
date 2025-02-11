// Smooth scroll for navigation
document.querySelector('.scroll-indicator').addEventListener('click', () => {
  const aboutSection = document.querySelector('.about');
  aboutSection.scrollIntoView({ behavior: 'smooth' });
});

// Intersection Observer for fade-in animations
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeIn 1s ease forwards';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all sections except hero
document.querySelectorAll('section:not(.hero)').forEach(section => {
  section.style.opacity = '0';
  observer.observe(section);
});

// Project cards hover effect
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-8px)';
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
  });
});

// Dynamic copyright year
document.querySelector('footer p').textContent = 
  `© ${new Date().getFullYear()} Pramod Topannavar. All rights reserved.`;
