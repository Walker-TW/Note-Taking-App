describe("NoteListModel", function() {
    var Note = require('../lib/Note.js')
    var NoteList = require('../lib/NoteListModel.js')
    var notelist
  
    beforeEach(function(){
      notelist = new NoteList()
    })
  
    it("Should create an array of notes on init", function(){
        expect(notelist.list).toEqual([])
      
    })
  
    it('will return all notes when asked', function(){
        var fullnotelist = new NoteList(new Note('yayyyy JavaScript'))
        expect(notelist.returnList()).toEqual(notelist.list)
        expect(fullnotelist.returnList()).toEqual(notelist.list)

    })

    it('will create a new Note and store it in the list', function(){
        notelist.addNote("Woooo Note")
        expect(notelist.list[0].text).toEqual("Woooo Note")

    })

    // it('Should return the note text when asked for', function(){
    //   note = new Note("JavaScript is like the best langauge")
    //   expect(note.returnText()).toEqual("JavaScript is like the best langauge")
    // })
  })
  