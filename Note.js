let Notes = document.getElementById("Notes");
let WriteNotebtnValue = document.getElementById("WriteNote");

let notesTable = [];
getStorege();
displayNotes();
function displayNotes() {
  Notes.innerHTML = "";
  let i = 0;
  for (note of notesTable) {
    let a = note.body;
    let content = `
      <div class="note" id="note">
            <p>${note.body}</p>
            <img src="Trash.png" alt="trash" onclick="deleteNote(${i})"  class="trash" />
            <img src="iddit.png" alt="eddit" onclick="edditNote('${a}',${i})" class="eddit" />
          </div>
     `;
    i++;
    Notes.innerHTML += content;
  }
  storageNotes();
}
WriteNotebtn.addEventListener("click", () => {
  WriteNotebtnValue = document.getElementById("WriteNote").value;
  let note = {
    body: WriteNotebtnValue,
  };
  notesTable.push(note);

  displayNotes();
  document.getElementById("WriteNote").value = "";
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
  } else {
    notesTable = notesTable;
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
/*
WriteNotebtnValue = document.getElementById("WriteNote").value;
WriteNotebtnValue = p;
deleteNote();
displayNotes(i);
console.log("hello"); */
