const noteContainer = document.querySelector('.note-container');
const noteBtn = document.querySelector('.btn');
var notes = document.querySelectorAll('.input-box');


//This will load all notes in the local storage
function showNotes() {
    noteContainer.innerHTML = localStorage.getItem('notes');
};
showNotes();

//To store notes in a storage and Update it
function updateStorage() {
    localStorage.setItem('notes', noteContainer.innerHTML);
};

//To create a new note
noteBtn.addEventListener('click', ()=> {
    let inputBox = document.createElement('p');
    let img = document.createElement('img');
    inputBox.className = 'input-box';
    inputBox.setAttribute('contenteditable', 'true');
    img.src = 'img/delete.png';
    noteBtn.style.backgroundColor = 'var(--green)';
    noteContainer.appendChild(inputBox).appendChild(img);
});


//To delete a note and Update it
noteContainer.addEventListener('click', function(e) {
    if(e.target.tagName.toLowerCase() == 'img') {
        e.target.parentElement.remove();
        updateStorage();
    } else if(e.target.tagName.toLowerCase() == 'p') {
        notes = document.querySelectorAll('.input-box');
        notes.forEach(nt => {
            nt.onkeyup = function() {
                updateStorage();
            };
        });
    };
});

