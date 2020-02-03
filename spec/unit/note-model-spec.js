'use strict'; 

(function specNote(exports){
  function testIfNoteExist() {
    var notebook = new Notebook("");
    if (notebook.note !== "") {
      throw new Error("Note exists not!")
    }
    var a = notebook.note
    var b = []    
    if(a != b){throw new Error("Romeo Romeo You're dead")} 
  }
  testIfNoteExist(console.log('test if note exist passed'));
  // console.log('test if note exist passed');
  function callsNoteString() { 
    var notebook = new Notebook("My favourite language is Javacript"); 
    if (notebook.returnNote() !== "My favourite language is Javacript") {
      throw new Error("Could not retrieve")
    }
    console.log("callsNoteString passed");
  }
  callsNoteString()

  function testIfSave(){
    let notebook = new Notebook("My favourite language is Javacript")
    notebook.save()
    if(notebook.returnNote() != ["My favourite language is Javacript"]){
      throw new Error("You suck")
    }
  }
  testIfSave()

  function testReturnStorage(){
    let notebook = new Notebook("")
    notebook.save()
    let b = notebook.storage
    if(notebook.returnStorage() != b ){
      throw new Error("returnStorage does not work")
    }
  }
  testReturnStorage()

  function testInsertNote(){
    var notebook = new Notebook("")
    notebook.insertNote("My favourite language is Javacript")
    let a = notebook.storage[notebook.storage.length-1]
    let b = "My favourite language is Javacript"
    if(a != b){
      throw new Error("ERRRORRRRRRAAAAAAAAAAA")
    }
  }
  testInsertNote()
})(this);
