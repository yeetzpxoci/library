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
    console.log(book.title + book.author + book.pages);
    myLibrary.push(book);
    const newDiv = document.createElement("div");
    newDiv.setAttribute("class", "card");
    addBookInfo(newDiv, book);
    cards.appendChild(newDiv);
}

function addBookInfo(div, book) {
    let newTitle = document.createElement("p");
    newTitle.innerHTML = book.title;
    let newAuthor = document.createElement("p");
    newAuthor.innerHTML = book.author;
    let newPages = document.createElement("p");
    newPages.innerHTML = book.pages;
    let newRead = document.createElement("p");
    newRead.innerHTML = book.read;
    div.appendChild(newTitle);
    div.appendChild(newAuthor);
    div.appendChild(newPages);
    div.appendChild(newRead);
    document.getElementById('input-form').style.display = 'none';
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

document.addEventListener('mouseup', function (e) {
    var container = document.getElementById('input-form');
    if (!container.contains(e.target)) {
        container.style.display = 'none';
    }
});


