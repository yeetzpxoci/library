const title = document.getElementById("title")
const author = document.getElementById("author")
const pages = document.getElementById("pages")
const read = document.getElementById("read")
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
    let book = new Book(title.value, author.value, pages.value, read.checked);
    myLibrary.push(book);
    displayCards();
    document.getElementById("input-form").style.display = "none"
}

function addBookCard(book, index) {
    const newDiv = document.createElement("div");
    newDiv.className = "card";
    newDiv.setAttribute("data-index", String(index));
    const newTitle = document.createElement("p");
    newTitle.innerHTML = book.title;
    const newAuthor = document.createElement("p");
    newAuthor.innerHTML = book.author;
    const newPages = document.createElement("p");
    newPages.innerHTML = book.pages;
    const newRead = document.createElement("p");
    if (book.read) {
        newRead.innerHTML = "Read";
    } else {
        newRead.innerHTML = "Not read";
    }
    const removeButton = document.createElement("button");
    removeButton.className = "remove-button"
    removeButton.innerHTML = "Remove"
    
    newDiv.append(newTitle, newAuthor, newPages, newRead, removeButton);
    cards.appendChild(newDiv);
}

function removeBookCard() {

}

function resetCards() {
    document.getElementById("cards").innerHTML = "";
}

function displayCards() {
    resetCards();
    for (let i = 0; i < myLibrary.length; i++) {
        addBookCard(myLibrary[i], i);
    }
}

function openForm() {
    document.getElementById("input-form").style.display = "flex"
    document.getElementById("input-form").style.boxShadow = "0px 0px 1px 5000px rgba(0, 0, 0, 0.8)"
}

document.addEventListener('mouseup', function (e) {
    var container = document.getElementById('input-form');
    if (!container.contains(e.target)) {
        container.style.display = 'none';
    }
});

document.getElementById("add-button").addEventListener("click", function (e) {
    addBookToLibrary();
    e.preventDefault();
});


