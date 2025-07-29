// Book constructor function
function Book(title, author, genre, year) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.year = year;
}

// Library object with methods
var library = {
    books: [],
    editIndex: null,

    // Method to add or update a book
    addOrUpdateBook: function(book) {
        if (this.editIndex === null) {
            this.books.push(book);
            console.log('Added "' + book.title + '" to the library.');
        } else {
            this.books[this.editIndex] = book;
            console.log('Updated book to "' + book.title + '".');
            this.editIndex = null;
        }
        this.displayBooks();
    },

    // Method to display all books
    displayBooks: function() {
        var bookList = document.getElementById('bookList');
        bookList.innerHTML = "";
        
        for (var i = 0; i < this.books.length; i++) {
            var book = this.books[i];
            var bookItem = document.createElement('li');
            bookItem.innerHTML = 
                (i + 1) + '. "' + book.title + '" by ' + book.author + ' - ' + book.genre + ', ' + book.year + 
                ' <button onclick="editBook(' + i + ')">Edit</button>' +
                ' <button onclick="deleteBook(' + i + ')">Delete</button>';
            bookList.appendChild(bookItem);
        }
    },

    // Method to delete a book
    deleteBook: function(index) {
        this.books.splice(index, 1);
        this.displayBooks();
        console.log('Deleted book at index ' + index + '.');
    },

    // Method to search for a book
    searchBook: function(title) {
        var searchResults = document.getElementById('searchResults');
        searchResults.innerHTML = "";
        
        var foundBooks = [];
        for (var i = 0; i < this.books.length; i++) {
            if (this.books[i].title.toLowerCase().indexOf(title.toLowerCase()) !== -1) {
                foundBooks.push(this.books[i]);
            }
        }
        
        if (foundBooks.length > 0) {
            for (var j = 0; j < foundBooks.length; j++) {
                var resultItem = document.createElement('li');
                var book = foundBooks[j];
                resultItem.textContent = '"' + book.title + '" by ' + book.author + ' - ' + book.genre + ', ' + book.year;
                searchResults.appendChild(resultItem);
            }
        } else {
            searchResults.innerHTML = "<li>No books found with that title.</li>";
        }
    },

    // Method to set a book for editing
    setEditIndex: function(index) {
        this.editIndex = index;
        var book = this.books[index];
        
        // Fill form fields with existing book data
        document.getElementById('title').value = book.title;
        document.getElementById('author').value = book.author;
        document.getElementById('genre').value = book.genre;
        document.getElementById('year').value = book.year;
    }
};

// Function to add or update a book
function addOrUpdateBook() {
    var title = document.getElementById('title').value;
    var author = document.getElementById('author').value;
    var genre = document.getElementById('genre').value;
    var year = document.getElementById('year').value;

    if (title && author && genre && year) {
        var newBook = new Book(title, author, genre, year);
        library.addOrUpdateBook(newBook);

        // Clear input fields
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('genre').value = '';
        document.getElementById('year').value = '';
    } else {
        alert("Please fill in all fields.");
    }
}

// Function to delete a book
function deleteBook(index) {
    library.deleteBook(index);
}

// Function to edit a book
function editBook(index) {
    library.setEditIndex(index);
}

// Function to search for books by title
function searchBook() {
    var searchInput = document.getElementById('searchInput').value;
    library.searchBook(searchInput);
}
