import { expect } from "chai";
import { bookService } from "../function/bookService.js"

describe("Book Service Tests", function () {

    describe("getBooks()", function () {
        it("Should return a status 200 and an array of books", function () {
            const response = bookService.getBooks()
            expect(response.status).to.equal(200)
            expect(response.data).to.be.an('array').that.has.lengthOf(3)
            expect(response.data[0]).to.include.keys('id', 'title', 'author', 'year', 'genre')
        })
    });

    describe("addBook()", function () {
        it("Should add a new book successfully", function () {
            const newBook = {
                id: "4",
                title: "Ace Of Spades",
                author: "Ace",
                year: 2024,
                genre: "Metal"
            }
            const response = bookService.addBook(newBook)
            expect(response.status).to.equal(201)
            expect(response.message).to.equal('Book added successfully.')
            const books = bookService.getBooks()
            expect(books.data).to.deep.include(newBook)
        })
        it("Should return status 400 when adding a book with missing fields", function () {
            const newBook = {
                id: "4",
                title: "Ace Of Spades",
                author: "Ace",
                year: 2024
            }
            const response = bookService.addBook(newBook)
            expect(response.status).to.equal(400)
            expect(response.error).to.equal('Invalid Book Data!')
        })
    });

    describe("deleteBook()", function () {
        it("Should delete a book by id successfully", function () {
            const newBook = {
                id: "5",
                title: "Ace Of Spades 2",
                author: "Ace",
                year: 2024,
                genre: "Heavy Metal"
            }
            const bookId = "5"
            bookService.addBook(newBook)
            const response = bookService.deleteBook(bookId)
            expect(response.status).to.equal(200)
            expect(response.message).to.equal('Book deleted successfully.')
            const books = bookService.getBooks().data
            const foundBooks = books.filter(book => book.id === bookId)
            expect(foundBooks.length).to.equal(0)
        })
        it("Should return status 404 when deleting a book with a non-existent id", function () {
            const bookId = "6"
            const response = bookService.deleteBook(bookId)
            expect(response.status).to.equal(404)
            expect(response.error).to.equal('Book Not Found!')
        })
    });
    describe("updateBook()", function () {
        it("Should update a book successfully", function () {
            const bookId = "1"
            const newBook = {
                id: "1",
                title: "King Of Clubs",
                author: "King",
                year: 2024,
                genre: "Heavy Metal"
            }
            const response = bookService.updateBook(bookId, newBook)
            expect(response.status).to.equal(200)
            expect(response.message).to.equal('Book updated successfully.')
            const books = bookService.getBooks()
            expect(books.data).to.deep.include(newBook)
        })
        it("Should return status 404 when updating a non-existent book", function () {
            const bookId = "66"
            const newBook = {
                id: "1",
                title: "King Of Clubs",
                author: "King",
                year: 2024,
                genre: "Heavy Metal"
            }
            const response = bookService.updateBook(bookId, newBook)
            expect(response.status).to.equal(404)
            expect(response.error).to.equal('Book Not Found!')
        })
        it("Should return status 400 when updating with incomplete book data", function () {
            const bookId = "1"
            const newBook = {
                id: "1",
                title: "King Of Clubs",
                author: "King",
                year: 2024
            }
            const response = bookService.updateBook(bookId, newBook)
            expect(response.status).to.equal(400)
            expect(response.error).to.equal('Invalid Book Data!')
        })
    });
});