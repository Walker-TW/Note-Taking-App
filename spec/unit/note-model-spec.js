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

  function testloadHTML() {
    var notebook = new Notebook("Show me some stuff")
    notebook.save()
    notebook.insertNote("Second Note")
    assert.isTrue(notebook.loadHTML() === "<ul><li><div>Show me some stuff</div></li><li><div>Second Note</div></li></ul>")
    // map all list together with <li><div>thing</li></div> the join() back into an array then add in <ul>+array+</ul>
  }
  testloadHTML()

})(this);
