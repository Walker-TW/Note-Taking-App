const Note = require("./Note")

class NoteList{
    constructor() {
        this.list = []
    }

    returnList(){
        return this.list
    }

    addNote(text){
        var newNote = new Note(text)
        this.list.push(newNote)
    }
}

module.exports = NoteList