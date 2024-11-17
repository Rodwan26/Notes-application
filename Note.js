let Notes = document.getElementById("Notes");
let notesTable = [];
getStorege();
displayNotes();
function displayNotes() {
  Notes.innerHTML = "";
  let i = 0;
  for (note of notesTable) {
    console.log("hi");
    let content = `
      <div class="note" id="note">
            <p>${note.body}</p>
            <img src="Trash.png" alt="trash" onclick="deleteNote(${i})"  class="trash" />
            <img src="iddit.png" alt="eddit" class="eddit" />
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
  WriteNotebtnValue = "";
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
