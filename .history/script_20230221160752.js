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
}

function addBookInfo(div, book) {
    const newTitle = document.createElement("p");
    newTitle.innerHTML = book.title;
    const newAuthor = document.createElement("p");
    newAuthor.innerHTML = book.author;
    const newPages = document.createElement("p");
    newPages.innerHTML = book.pages;
    const newRead = document.createElement("p");
    newRead.innerHTML = book.read;
    div.appendChild(newTitle);
    div.appendChild(newAuthor);
    div.appendChild(newPages);
    div.appendChild(newRead);
}

function displayBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        const newDiv = document.createElement("div");
        newDiv.setAttribute("class", "card");
        addBookInfo(newDiv, myLibrary[i]);
        cards.appendChild(newDiv);
    }
}

function openForm() {
    document.getElementById("input-form").style.display = "flex"
    document.getElementById("input-form").style.boxShadow = "0px 0px 1px 5000px rgba(0, 0, 0, 0.8)"
}

function closeForm() {
    document.getElementById('input-form').style.display = 'none';
}

document.addEventListener('mouseup', function (e) {
    var container = document.getElementById('input-form');
    if (!container.contains(e.target)) {
        container.style.display = 'none';
    }
});

let book1 = new Book("htomi" , "hs", 23, true);
let book2 = new Book("yeet", "asd", 65, false);
let book3 = new Book("smth", "bsdf", 1, true);
let book4 = new Book("smth", "bsdf", 1, true);
let book5 = new Book("smth", "bsdf", 1, true);
myLibrary.push(book1, book2, book3, book4, book5);
displayBooks();
