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

    const slider = document.querySelector('.slider');
    const images = document.querySelectorAll('.slider img');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    let currentIndex = 0;
    
    function updateSliderPosition() {
      const slideWidth = images[0].clientWidth; // Get the width of one image
      slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
    
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % images.length; // Loop to the start
      updateSliderPosition();
    });
    
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length; // Loop to the end
      updateSliderPosition();
    });
    
    // Ensure the slider adjusts correctly when the window is resized
    window.addEventListener('resize', updateSliderPosition);

// Select all navigation links
const navLinks = document.querySelectorAll('.nav-links a');

// Function to handle active state
function setActiveLink() {
  let fromTop = window.scrollY;

  navLinks.forEach(link => {
    let section = document.querySelector(link.getAttribute('href'));

    if (
      section.offsetTop <= fromTop + 100 && // Section is in view
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Attach event listener to window scroll
window.addEventListener('scroll', setActiveLink);

document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');

  function updateActiveLink() {
    let fromTop = window.scrollY;

    navLinks.forEach(link => {
      let section = document.querySelector(link.getAttribute('href'));

      if (
        section.offsetTop <= fromTop + 100 && // Section in view
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink);
});
