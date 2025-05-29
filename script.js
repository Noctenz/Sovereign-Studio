document.addEventListener('DOMContentLoaded', function() {
<<<<<<< HEAD
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
=======
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
>>>>>>> f168e373702b4337376fe60c70689a9bd041a48a
