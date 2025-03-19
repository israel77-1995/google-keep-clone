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

  // Collapse when clicking the "Close" button
  closeButton.addEventListener("click", function () {
    noteCard.classList.remove("expanded");
    noteCard.classList.add("collapsed");
});



});

document.addEventListener("DOMContentLoaded", () => {
    const noteCard = document.querySelector(".note-card");
    const titleInput = noteCard.querySelector("#title div");
    const noteInput = noteCard.querySelector("#add-note");
    const closeButton = noteCard.querySelector(".close-btn");
    const notesContainer = document.getElementById("notes-container");

    function addNote() {
        const title = titleInput.innerText.trim();
        const content = noteInput.innerText.trim();

        // Only add note if content exists
        if (title || content) {
            const noteElement = document.createElement("div");
            noteElement.classList.add("note");
            noteElement.innerHTML = `
                <h3>${title || "Untitled"}</h3>
                <p>${content}</p>
                <button class="archive-btn">Archive</button>
            `;

            // Append to the notes container
            notesContainer.appendChild(noteElement);

            // always have this placeholder text after editing
            titleInput.innerText = "Title";
            noteInput.innerText = "Take a note";
        }
    }

    // Close button click event
    closeButton.addEventListener("click", addNote);

    // Detect click outside the note card
    document.addEventListener("click", (event) => {
        if (!noteCard.contains(event.target) && event.target !== closeButton) {
            addNote();
        }
    });

 
});











  