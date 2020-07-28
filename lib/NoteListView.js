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
        if (this.notelistmodel == undefined) return ``
        var iterator = this.notelistmodel.list
        for (const text in iterator) {
           returnString.push(`<li><div>` + `${iterator[text].text}` + `</div></li>`)
          }
        return returnString.join('')
    }

}

module.exports = NoteListView