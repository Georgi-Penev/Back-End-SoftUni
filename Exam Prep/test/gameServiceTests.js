// DO NOT FORGET THESE
// npm init
//npm install mocha
//npm install chai
// in package.json => test: mocha , add type: module
//and export the functions
//use npm test

import { expect } from "chai";
import { gameService } from "../functions/gameService.js"

describe("gameService Tests", function () {

    describe("getGames()", function () {
        it("Should return a successful response with a list of games", function () {
            const response = gameService.getGames()
            expect(response.status).to.equal(200)
            expect(response.data).to.be.an('array').that.has.lengthOf(3)
            expect(response.data[0]).to.include.keys('id', 'title', 'genre', 'year', 'developer', 'description')
        })
    });

    describe("addGame()", function () {
        it("Should add a new game successfully", function () {
            const newGame = {
                id: "4",
                title: "Ace Of Spades",
                genre: "Action",
                year: 2024,
                developer: "Ace",
                description: "The only thing you need."
            }
            const response = gameService.addGame(newGame)
            expect(response.status).to.equal(201)
            expect(response.message).to.equal('Game added successfully.')
            const games = gameService.getGames()
            expect(games.data).to.deep.include(newGame)
        })


        it("Should return an error for invalid game data", function () {
            const newGame = {
                id: "4",
                title: "Ace Of Spades",
                genre: "Action",
                year: 2024,
                developer: "Ace"
            }
            const response = gameService.addGame(newGame)
            expect(response.status).to.equal(400)
            expect(response.error).to.equal('Invalid Game Data!')
        })
    });

    describe("deleteGame()", function () {
        it("Should delete an existing game by ID", function () {
            const gameId = "3"
            const response = gameService.deleteGame(gameId)
            expect(response.status).to.equal(200)
            expect(response.message).to.equal('Game deleted successfully.')
            const games = gameService.getGames().data
            const foundGames = games.filter(games => games.id === gameId)
            expect(foundGames.length).to.equal(0)
        })

        it("Should return an error if the game is not found", function () {
            const gameId = "6"
            const response = gameService.deleteGame(gameId)
            expect(response.status).to.equal(404)
            expect(response.error).to.equal('Game Not Found!')
        })
    });

    describe("updateGame()", function () {
        it("Should update an existing game with new data", function () {
            const gameId = "1"
            const newGame = {
                id: "1",
                title: "Ace Of Spades",
                genre: "Action",
                year: 2024,
                developer: "Ace",
                description: "The only thing you need."
            }
            const response = gameService.updateGame(gameId, newGame)
            expect(response.status).to.equal(200)
            expect(response.message).to.equal('Game updated successfully.')
            const games = gameService.getGames()
            expect(games.data).to.deep.include(newGame)
        })


        it("Should return an error if the game to update is not found", function () {
            const gameId = "666"
            const newGame = {
                id: "1",
                title: "Ace Of Spades",
                genre: "Action",
                year: 2024,
                developer: "Ace",
                description: "The only thing you need."
            }
            const response = gameService.updateGame(gameId, newGame)
            expect(response.status).to.equal(404)
            expect(response.error).to.equal('Game Not Found!')
        })

        it("Should return an error if the new game data is invalid", function () {
            const gameId = "1"
            const newGame = {
                id: "1",
                title: "Ace Of Spades",
                genre: "Action",
                year: 2024,
                developer: "Ace"
            }
            const response = gameService.updateGame(gameId, newGame)
            expect(response.status).to.equal(400)
            expect(response.error).to.equal('Invalid Game Data!')
        })
    });
});