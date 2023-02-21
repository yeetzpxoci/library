const title = document.getElementById("title").value
const author = document.getElementById("author").value
const pages = document.getElementById("pages").value
const read = document.getElementById("read").checked
const cards = document.getElementById("cards")

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
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
    console.log(myLibrary.length)
}

function displayBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        const newDiv = document.createElement("div");
        newDiv.setAttribute("class", "card");
        cards.appendChild(newDiv);
    }
}

let book1 = new Book(title, author, pages, read);
let book2 = new Book(title, author, pages, read);
let book3 = new Book(title, author, pages, read);
myLibrary.push(book1, book2, book3);
