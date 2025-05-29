  // Back to Top Button
  const backToTopButton = document.getElementById('backToTop');
  
  window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
          backToTopButton.classList.add('visible');
      } else {
          backToTopButton.classList.remove('visible');
      }
  });
  
  backToTopButton.addEventListener('click', () => {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });
  
  const menuBtn = document.querySelector(".menu-btn");
  const navLinks = document.querySelector(".nav-links");

  menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
  });

  document.addEventListener('contextmenu', event => event.preventDefault());

  // Blok shortcut DevTools
  document.addEventListener('keydown', function(e) {
    if (
      e.key === 'F12' || // F12
      (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) || // Ctrl+Shift+I/J/C
      (e.ctrlKey && e.key === 'U') // Ctrl+U (view source)
    ) {
      e.preventDefault();
    }
  });