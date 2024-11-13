import { expect } from "chai";
import { movieService } from "../functions/movieService.js"

describe("Movie service tests", function () {
    describe("getMovies function tests", function () {
        it("should return all movies with status 200", function () {
            const response = movieService.getMovies()
            expect(response.status).to.equal(200)
            expect(response.data).to.be.an('array').that.has.lengthOf(3)
            expect(response.data[0]).to.include.keys('id', 'name', 'genre', 'year', 'director', 'rating', 'duration', 'language', 'desc')
            expect(response.data[1]).to.include.keys('id', 'name', 'genre', 'year', 'director', 'rating', 'duration', 'language', 'desc')
            expect(response.data[2]).to.include.keys('id', 'name', 'genre', 'year', 'director', 'rating', 'duration', 'language', 'desc')
        });
    });
    describe("addMovie function tests", function () {
        it("should add new movie", function () {
            const newMovie = {
                id: "4",
                name: "Ace Of Spades",
                genre: "Action",
                year: 2024,
                director: "Ace",
                rating: 10,
                duration: 52,
                language: "English",
                desc: "The only thing you need."
            }
            const response = movieService.addMovie(newMovie)
            expect(response.status).to.equal(201)
            expect(response.message).to.equal('Movie added successfully.')
            const movies = movieService.getMovies()
            expect(movies.data).to.deep.include(newMovie)
        });
        it("should add NOT new movie", function () {
            const newMovie = {
                id: "4",
                name: "Ace Of Spades",
                genre: "Action",
                year: 2024,
                director: "Ace",
                rating: 10,

                desc: "The only thing you need."
            }
            const response = movieService.addMovie(newMovie)
            expect(response.status).to.equal(400)
            expect(response.error).to.equal('Invalid Movie Data!')
        });
    });
    describe("deleteMovie function tests", function () {
        it("should delete movie with given ID", function () {
            const movieId = "3"
            const response = movieService.deleteMovie(movieId)
            expect(response.status).to.equal(200)
            expect(response.message).to.equal('Movie deleted successfully.')
            const movies = movieService.getMovies().data
            const foundMovies = movies.filter(movies => movies.id === movieId)
            expect(foundMovies.length).to.equal(0)
        });
        it("should NOT delete movie with invalid ID", function () {
            const movieId = "6"
            const response = movieService.deleteMovie(movieId)
            expect(response.status).to.equal(404)
            expect(response.error).to.equal('Movie Not Found!')
        });
    });
    describe("updateMovie function tests", function () {
        it("should update movie with new data", function () {
            const oldMovie = "Inception"
            const newMovie = {
                id: "7",
                name: "Ace Of Spades",
                genre: "Action",
                year: 2024,
                director: "Ace",
                rating: 10,
                duration: 52,
                language: "English",
                desc: "The only thing you need."
            }
            const response = movieService.updateMovie(oldMovie, newMovie)
            expect(response.status).to.equal(200)
            expect(response.message).to.equal('Movie updated successfully.')
            const movies = movieService.getMovies()
            expect(movies.data).to.deep.include(newMovie)
        });
        it("should NOT find movie", function () {
            const oldMovie = "99999"
            const newMovie = {
                id: "7",
                name: "Ace Of Spades",
                genre: "Action",
                year: 2024,
                director: "Ace",
                rating: 10,
                duration: 52,
                language: "English",
                desc: "The only thing you need."
            }
            const response = movieService.updateMovie(oldMovie, newMovie)
            expect(response.status).to.equal(404)
            expect(response.error).to.equal('Movie Not Found!')
        });
        it("should NOT add movie with invalid data", function () {
            const oldMovie = "The Matrix"
            const newMovie = {

            }
            const response = movieService.updateMovie(oldMovie, newMovie)
            expect(response.status).to.equal(400)
            expect(response.error).to.equal('Invalid Movie Data!')
        });
    });
});


