// Get the toggle button and sidebar
const menuToggle = document.getElementById('menu-toggle');
const sideNav = document.getElementById('side-nav');
const closeButton = document.querySelector(".close-btn");
const noteCard = document.querySelector(".note-card");
const titleInput = document.querySelector("#title div");
const noteInput = document.querySelector("#add-note");
const notesContainer = document.querySelector("#notes-container");

// Toggle the expanded class on sidebar when the button is clicked
menuToggle.addEventListener('click', () => {
  sideNav.classList.toggle('expanded');
  
});

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById('menu-toggle');
    const sideNav = document.getElementById('side-nav');
    const closeButton = document.querySelector(".close-btn");
    const noteCard = document.querySelector(".note-card");
    const titleInput = document.querySelector("#title div");
    const noteInput = document.querySelector(".note-content");  // Changed to match class from HTML
    const notesContainer = document.querySelector("#notes-container");
  
    console.log('menuToggle:', menuToggle);
    console.log('sideNav:', sideNav);
    console.log('closeButton:', closeButton);
    console.log('noteCard:', noteCard);
    console.log('noteTitle:', titleInput);
    console.log('noteContent:', noteInput);  // Updated the selector to match the class "note-content"
    console.log('notesContainer:', notesContainer);
  
    // Toggle the sidebar visibility when clicking the menu toggle button
    menuToggle.addEventListener('click', () => {
      console.log('Toggling sidebar');
      sideNav.classList.toggle('expanded');
    });
  
    // Start with the note card collapsed
    noteCard.classList.add("collapsed");
  
    // Expand the note card when clicking inside the note
    noteInput.addEventListener("focus", function () {
      console.log('Note card expanded');
      noteCard.classList.remove("collapsed");
      noteCard.classList.add("expanded");
    });
  
    // Collapse the note card when clicking outside
    document.addEventListener("click", function (event) {
      if (!noteCard.contains(event.target)) {
        console.log('Note card collapsed');
        noteCard.classList.remove("expanded");
        noteCard.classList.add("collapsed");
      }
    });
  
    // Collapse the note card when clicking the "Close" button
    closeButton.addEventListener("click", function () {
      console.log('Note card collapsed (close button clicked)');
      noteCard.classList.remove("expanded");
      noteCard.classList.add("collapsed");
    });
  
    // Add a note when the close button is clicked
    closeButton.addEventListener("click", () => {
      let title = titleInput.innerText.trim();  // Use innerText for contenteditable
      let content = noteInput.innerText.trim();  // Use innerText for contenteditable
  
      console.log('Adding note with title:', title);
      console.log('Adding note with content:', content);
  
      if (title || content) {  // Ensure we don't add empty notes
        const noteCard = document.createElement("div");
        noteCard.classList.add("note-card");
  
        noteCard.innerHTML = `
          <h3>${title || "Untitled"}</h3>
          <p>${content}</p>
          <div class="note-actions">
            <span class="material-symbols-outlined">archive</span>
            <span class="material-symbols-outlined">delete</span>
          </div>
        `;
  
        console.log('Appending new note card');
        notesContainer.appendChild(noteCard);
  
        // Clear input fields
        titleInput.innerText = "Title";  // Reset contenteditable fields
        noteInput.innerText = "Take a note...";  // Reset contenteditable fields
      }
    });
  })
  