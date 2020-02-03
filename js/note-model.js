
(function(exports) {
  function Notebook(string) {
    this.note = string 
    this.storage = []
  };

  Notebook.prototype.returnNote = function(){ return this.note }
  Notebook.prototype.returnStorage = function(){ return this.storage }
  Notebook.prototype.save = function(){ this.storage.push(this.note)}
  Notebook.prototype.insertNote = function(string){ this.storage.push(string) }

  exports.Notebook = Notebook; 
 })(this); 