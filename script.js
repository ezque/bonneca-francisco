document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default link behavior

    const targetId = this.getAttribute('href').substring(1); // Get the target section ID
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offset = -30; 
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset + offset;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth', // Smooth scrolling
      });
    }
  });
});
const burgerMenu = document.querySelector('.burger-menu');
    const nav = document.querySelector('nav');

    burgerMenu.addEventListener('click', () => {
        burgerMenu.classList.toggle('active');
        nav.classList.toggle('active');
    });