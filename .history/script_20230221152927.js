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

function addBookInfo(div) {
    const newTitle = document.createElement("p");
    newTitle.innerHTML = title;
    const newAuthor = document.createElement("p");
    newAuthor.innerHTML = author;
    const newPages = document.createElement("p");
    newPages.innerHTML = pages;
    const newRead = document.createElement("p");
    newRead.innerHTML = read;
    div.appendChild(newTitle);
    div.appendChild(newAuthor);
    div.appendChild(newPages);
    div.appendChild(newRead);
}

function displayBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        const newDiv = document.createElement("div");
        newDiv.setAttribute("class", "card");
        addBookInfo(newDiv);
        cards.appendChild(newDiv);
    }
}

let book1 = new Book("htomi" , "hs", 23, true);
let book2 = new Book("yeet", "asd", 65, false);
let book3 = new Book("smth", "bsdf", 1, true);
let book4 = new Book("smth", "bsdf", 1, true);
let book5 = new Book("smth", "bsdf", 1, true);
myLibrary.push(book1, book2, book3, book4, book5);
displayBooks();
