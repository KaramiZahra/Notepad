let addIcon = document.querySelector('.fa-plus')
let inputText = document.querySelector('.input-text')
let inputBox = document.querySelector('.input-box')
let noteBox = document.querySelector('.note-box')
let noteText = document.querySelector('.note-text')
let colors = document.querySelectorAll('.color')

// auto focus input
window.addEventListener('load', function() {
    inputText.focus()
})

// add a new note function 
function addFunction() {
    let inputValue = inputText.value

    inputText.value = ''
    if (inputValue) {
        // create a new element for new note 
        let newNoteText = document.createElement('p')
        newNoteText.innerHTML = inputValue
        newNoteText.className = noteText.classList

        newNoteText.setAttribute('style', backColor)

        noteBox.append(newNoteText)

        document.querySelector('.tip').classList.remove('hidden')

        // delete a note 
        newNoteText.addEventListener('click', function() {
            newNoteText.remove('note-text')
        })
    }
}

// add a new note with both Enter key and Click event 
addIcon.addEventListener('click', addFunction)
inputText.addEventListener('keypress', function(event) {
    if (event.keyCode === 13) {
        addFunction()
    }
})

// manage background color of notes 
let backColor;
colors.forEach(function(color) {
    color.addEventListener('click', function() {
        backColor = color.getAttribute('style')
        inputBox.setAttribute('style', backColor)
        inputText.focus()
    })
})
