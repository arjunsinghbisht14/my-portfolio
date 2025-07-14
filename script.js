// script.js
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('year').textContent = new Date().getFullYear();

  const navItems = document.querySelectorAll('.nav-item');
  const contentSections = document.querySelectorAll('.content-section');
  const buttons = document.querySelectorAll('.btn');

  function switchSection(sectionId) {
    contentSections.forEach(section => section.classList.remove('active-section'));
    document.getElementById(sectionId).classList.add('active-section');

    navItems.forEach(item => {
      item.classList.toggle('active', item.dataset.section === sectionId);
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  navItems.forEach(item => {
    item.addEventListener('click', function() {
      switchSection(this.dataset.section);
    });
  });

  buttons.forEach(button => {
    button.addEventListener('click', function() {
      switchSection(this.dataset.section);
    });
  });

  function animateOnScroll() {
    const elements = document.querySelectorAll('.resume-item, .project-card, .about-content p, .skill-tag');
    const windowHeight = window.innerHeight;

    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const animationPoint = windowHeight * 0.8;

      if (elementPosition < animationPoint) {
        element.classList.add('visible');
      }
    });
  }

  animateOnScroll();
  window.addEventListener('scroll', animateOnScroll);

  window.addEventListener('scroll', function() {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollProgress = (scrollTop / scrollHeight) * 100;
    document.querySelector('.scroll-progress').style.width = scrollProgress + '%';
  });

  const backToTopBtn = document.querySelector('.back-to-top');

  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  backToTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  switchSection('home');
});
