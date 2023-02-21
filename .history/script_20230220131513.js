const title = document.getElementById("title")
const author = document.getElementById("author")
const pages = document.getElementById("pages")
const read = document.getElementById("read").checked

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return title + " by " + author + ", " + String(pages) + " pages, not read yet"
    }
}

function addBookToLibrary() {
    myLibrary.push(Book(title, author, pages, read));
    console.log(myLibrary[0].info())
}
