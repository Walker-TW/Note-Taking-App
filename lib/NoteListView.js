class NoteListView{
    constructor(notelistmodel){
        this.notelistmodel = notelistmodel
    }

    returnHTML() {
        var returnString = this.htmlify()
        return `<ul>`+ `${returnString}`+`</ul>`
    }

    htmlify() {
        var returnString = []
        var iterator = this.notelistmodel.list
        for (const text in iterator) {
           returnString.push(`<li><div>` + `${iterator[text].text}` + `</div></li>`)
          }
        return returnString.join('')
    }

}

{/* <li><div>This is the First Note</div></li> */}

module.exports = NoteListView