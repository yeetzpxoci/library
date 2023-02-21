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

    const readButton = document.createElement("button");
    readButton.className = "read-button"
    if (book.read) {
        readButton.innerHTML = "Read";
        readButton.style.backgroundColor = "#DFFFD8"
    } else {
        readButton.innerHTML = "Not read";
        readButton.style.backgroundColor = "#F7C8E0"
    }
    readButton.setAttribute("onclick", "toggleRead(this)");

    const removeButton = document.createElement("button");
    removeButton.className = "remove-button"
    removeButton.setAttribute("onclick", "removeBookCard(this.parentNode)")
    removeButton.innerHTML = "Remove"
    
    newDiv.append(newTitle, newAuthor, newPages, readButton,removeButton);
    cards.appendChild(newDiv);
}

function removeBookCard(card) {
    const index = card.dataset.index;
    if (index > -1) { // only splice array when item is found
        myLibrary.splice(index, 1); // 2nd parameter means remove one item only
    }
    card.remove()
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

function toggleRead(button) {
    if (button.innerHTML === "Read") {
        button.innerHTML = "Not read";
        button.style.backgroundColor = "#F7C8E0"
    } else {
        button.innerHTML = "Read";
        button.style.backgroundColor = "#DFFFD8"
    }
}

function signUp(event) {
    addBookToLibrary();
    event.preventDefault();
}

document.addEventListener('mouseup', function (e) {
    var container = document.getElementById('input-form');
    if (!container.contains(e.target)) {
        container.style.display = 'none';
    }
});




