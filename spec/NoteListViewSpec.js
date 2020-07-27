describe(`NoteListView`, function() {
    var NoteListView = require('../lib/NoteListView.js')
    var Note = require('../lib/Note.js')
    var NoteList = require('../lib/NoteListModel.js')
    var note1, note2, note3, notelist, notelistview

    beforeEach(function() {
        note1 = new Note("This is the First Note")
        note2 = new Note("This is the Second Note")
        note3 = new Note("This is the Third Note")
        notelist = new NoteList()
        notelist.addNote('First')
        notelist.addNote('Second')
        notelist.addNote('Third')
        notelistview = new NoteListView(notelist)
    })

    it('will institate with a NoteListModel as an argument', function(){
        expect(notelistview.notelistmodel).toEqual(notelist)
    })

    it('will add on requried HTML at beginning and end', function(){
        expect(notelistview.returnHTML()).toEqual('<ul><li><div>First</div></li><li><div>Second</div></li><li><div>Third</div></li></ul>')
    })

    it('will return a HTML string for each note', function(){
        expect(notelistview.htmlify()).toEqual('<li><div>First</div></li><li><div>Second</div></li><li><div>Third</div></li>')
    })

    it('will add a given html string to every argument passed to it', function(){
        var onenotelist = new NoteList()
        onenotelist.addNote('This is the First Note')
        var oneNoteListView = new NoteListView(onenotelist)
        expect(oneNoteListView.htmlify()).toEqual('<li><div>This is the First Note</div></li>')
    })

    it('will instantiate without an argument passed to it', function(){
       var blanknotelistview = new NoteListView()
       expect(blanknotelistview.notelistmodel).toEqual(undefined)
    })

})