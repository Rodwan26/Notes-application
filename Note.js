let Notes = document.getElementById("Notes");
let WriteNotebtnValue = document.getElementById("WriteNote");

let notesTable = [];
getStorege();
displayNotes();

function displayNotes() {
  Notes.innerHTML = "";
  let i = 0;
  for (note of notesTable) {
    let content = `
      <div class="note" id="note">
        <p>${note.body}</p>
        <img src="Trash.png" alt="trash" onclick="deleteNote(${i})" class="trash" />
        <img src="iddit.png" alt="eddit" onclick="edditNote('${note.body}', ${i})" class="eddit" />
      </div>
    `;
    i++;
    Notes.innerHTML += content;
  }
  storageNotes();
}

WriteNotebtn.addEventListener("click", () => {
  let WriteNotebtnValue = document.getElementById("WriteNote").value;
  let note = {
    body: WriteNotebtnValue,
  };
  notesTable.push(note);

  displayNotes();
  console.log(notesTable);
  document.getElementById("WriteNote").value = ""; // Clear input field
});

function deleteNote(i) {
  notesTable.splice(i, 1);
  displayNotes();
}

function storageNotes() {
  let NotesJson = JSON.stringify(notesTable);
  localStorage.setItem("Notes", NotesJson);
}

function getStorege() {
  let el = localStorage.getItem("Notes");
  notesTable = JSON.parse(el);
  if (notesTable == null) {
    notesTable = [];
  }
}

function edditNote(p, index) {
  document.getElementById("WriteNote").value = p;
  deleteNote(index);
  displayNotes();
  disableEditButtons();
}

function disableEditButtons() {
  let editButtons = document.querySelectorAll(".eddit");
  editButtons.forEach((eddit) => {
    eddit.style.pointerEvents = "none";
    eddit.style.cursor = " no-drop";
  });
}
