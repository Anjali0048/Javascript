console.log("this is tutorial 32");

// create a class library and implement the following :
// constructor must take the book list as an argument
// getBookList()
// issueBook(bookname, user)
// returnBook(bookname)

class Library {
    constructor(booklist){
        this.booklist = booklist;
        this.issuedBooks = {};

    }

    getBookList(){
        this.booklist.array.forEach(element => {
            console.log(element);
        });
    }

    issueBook(bookname, user){
        this.issuedBooks[bookname] = user;
    }

    returnBook(bookname){
        delete this.issuedBooks[bookname];
    }


}