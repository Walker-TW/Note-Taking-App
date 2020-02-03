'use strict'; 

(function specNote(exports){
  function testIfNoteExist() {
    var notebook = new Notebook("");
      assert.isTrue(notebook.note == "")

    var a = notebook.note
    var b = []    
    assert.isTrue(a == b)
  }
  testIfNoteExist()

  function callsNoteString() { 
    var notebook = new Notebook("My favourite language is Javacript"); 
    assert.isTrue(notebook.returnNote() === "My favourite language is Javacript") 
  }
  callsNoteString()

  function testIfSave(){
    let notebook = new Notebook("My favourite language is Javacript")
    notebook.save()
    assert.isTrue(notebook.returnNote() == ["My favourite language is Javacript"])
  }
  testIfSave()

  function testReturnStorage(){
    let notebook = new Notebook("")
    notebook.save()
    let b = notebook.storage
    assert.isTrue(notebook.returnStorage() == b )
    }
  
  testReturnStorage()

  function testInsertNote(){
    var notebook = new Notebook("")
    notebook.insertNote("My favourite language is Javacript")
    let a = notebook.storage[notebook.storage.length-1]
    let b = "My favourite language is Javacript"
    assert.isTrue(a == b)
  }
  testInsertNote()

})(this);
