// scripts/page3.js

document.addEventListener("DOMContentLoaded", function () {
  // Function to simulate image gallery dots
  const dots = document.querySelectorAll('.dot');
  dots.forEach(dot => {
    dot.addEventListener('click', function(e) {
      e.stopPropagation();
      const dotsContainer = this.parentElement;
      const activeDot = dotsContainer.querySelector('.active');
      if (activeDot) {
        activeDot.classList.remove('active');
      }
      this.classList.add('active');
    });
  });
  
  // Make the heart icons functional
  const favoriteButtons = document.querySelectorAll('.favorite-btn');
  favoriteButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.stopPropagation();
      const svg = this.querySelector('svg');
      if (svg.getAttribute('fill') === 'none') {
        svg.setAttribute('fill', '#e41749');
      } else {
        svg.setAttribute('fill', 'none');
      }
    });
  });
});