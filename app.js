const books = [
    {
        id: 1,
        title: "Name of the Wind",
        author: "Patrick Rothfuss",
        read: true,
    },
];

class Book{
    constructor(id, title, author, read){
        this.id = id;
        this.title = title;
        this.author = author;
        this.read = read;
    }
}

class Library{
    constructor(books) {
        this.bookCount = books.length;
        this.books = books;
    }

    addBook() {
        //Select the inputs from the form -- title, author and read
        const title = document.getElementById("title");
        const author = document.getElementById("author");
        const read = document.getElementById("read");
        //Increment book count property
        this.nextId++;
        //Create an instance from my Book class with the input values
        const newBook = new Book(this.nextId, title.value, author.value, read.checked);
        //Push the new book instance into the book array
        this.books.push(newBook);
        

        //Select the table
        const tbody = document.getElementById("tableBody");
        
        //Create a new table row
        const newTr = document.createElement("tr");
        //Create 3 new table data cells
        const newTitle = document.createElement("td");
        const newAuthor = document.createElement("td");
        const newRead = document.createElement("td");

        //Add text content to td's with book values
        newTitle.textContent = title.value;
        newAuthor.textContent = author.value;
        const newCheckbox = document.createElement("input");
        newCheckbox.id = newBook.id;
        newCheckbox.type = "checkbox";
        newCheckbox.checked = read.checked;
        newCheckbox.disabled = read.checked;
        newCheckbox.addEventListener("click", (event) =>{
            this.markRead(event.target, parseInt(event.target.id));
        });
        newRead.appendChild(newCheckbox);

        //Append the td's to the tr
        newTr.appendChild(newTitle);
        newTr.appendChild(newAuthor);
        newTr.appendChild(newRead);
        //Append the tr to the tbody
        tbody.appendChild(newTr);
    }

    markRead(checkbox, id) {
        this.books.forEach(book => {
            if(id === book.id) {
                book.read = true;
                checkbox.disabled = true;
            }
        });
    }
}

const library = new Library(books);

const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
        library.addBook();
});