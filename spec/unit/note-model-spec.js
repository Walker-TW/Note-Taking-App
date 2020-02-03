'use strict'; 

(function specNote(exports){
    function testIfNoteExist() {
        var notebook = new Notebook();

        if (notebook.note === string) {
            throw new Error("Note exists not!")
        }
    }
    testIfNoteExist(    console.log('test if note exist passed')
    );
    // console.log('test if note exist passed');

    function callsNoteString() { 
        var notebook = new Notebook("My favourite language is Javacript"); 

        if (notebook.returnNote() !== "My favourite language is Javacript") {
            

        throw new Error("Could not retrieve")
        }
        console.log("callsNoteString passed");

    }
        callsNoteString()
    
    // 
  })(this);
