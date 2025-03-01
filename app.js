// Get the toggle button and sidebar
const menuToggle = document.getElementById('menu-toggle');
const sideNav = document.getElementById('side-nav');

// Toggle the expanded class on sidebar when the button is clicked
menuToggle.addEventListener('click', () => {
  sideNav.classList.toggle('expanded');
});

document.addEventListener("DOMContentLoaded", function () {
  const noteCard = document.querySelector(".note-card");
  const addNote = document.querySelector("#add-note");

  // Start in collapsed state
  noteCard.classList.add("collapsed");

  // Expand when clicking inside the note
  addNote.addEventListener("focus", function () {
      noteCard.classList.remove("collapsed");
      noteCard.classList.add("expanded");
  });

  // Collapse when clicking outside
  document.addEventListener("click", function (event) {
      if (!noteCard.contains(event.target)) {
          noteCard.classList.remove("expanded");
          noteCard.classList.add("collapsed");
      }
  });
});








  