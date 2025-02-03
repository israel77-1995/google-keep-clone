// Get the toggle button and sidebar
const menuToggle = document.getElementById('menu-toggle');
const sideNav = document.getElementById('side-nav');

// Toggle the expanded class on sidebar when the button is clicked
menuToggle.addEventListener('click', () => {
  sideNav.classList.toggle('expanded');
});


  