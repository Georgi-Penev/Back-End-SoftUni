import { expect } from "chai";
import *  as functions from "../Functions.js"; //this does not work with judge!!!
import { foodDelivery } from "../Functions.js"
import { workforceManagement } from "../Functions.js"
import { describe, it } from "mocha";

describe('isOddOrEven', () => {


    it('Not a string', () => {
        let actual = functions.isOddOrEven(2)
        expect(actual).to.be.undefined
    })
    it('Odd', () => {
        let actual = functions.isOddOrEven('Ace')
        let expected = 'odd'
        expect(actual).to.be.equal(expected)
    })
    it('Even', () => {
        let actual = functions.isOddOrEven('King')
        let expected = 'even'
        expect(actual).to.be.equal(expected)
    })
    it('Is null', () => {
        let actual = functions.isOddOrEven(null)
        expect(actual).to.be.undefined
    })
    it('Not a string', () => {
        let actual = functions.isOddOrEven('Ace and King')
        let expected = 'even'
        expect(actual).to.be.equal(expected)
    })
});

describe('Char Look Up', () => {


    it('Returns correct', () => {
        let expected = functions.lookupChar('Ace', 2)
        let actual = 'e'
        expect(expected).to.be.equal(actual)
    })
    it('Returns undefined', () => {
        expect(functions.lookupChar('Ace', 'King')).to.be.undefined
        expect(functions.lookupChar(5, 6)).to.be.undefined
        expect(functions.lookupChar('Ace', 2.2)).to.be.undefined
    })
    it('Wrong length', () => {
        expect(functions.lookupChar('Ace', 4)).to.be.equal('Incorrect index')
        expect(functions.lookupChar('Ace', -3)).to.be.equal('Incorrect index')

    })

});

describe("Math Enforcer", () => {

    it('Adds 5 Correctly Positive', () => {
        let actual = functions.mathEnforcer.addFive(5);
        let expected = 10;
        expect(expected).to.be.equal(actual)
    })
    it('Adds 5 Correctly Negative', () => {
        let actual = functions.mathEnforcer.addFive(-15);
        let expected = -10;
        expect(expected).to.be.equal(actual)
    })
    it('Adds 5 Correctly Floating', () => {
        let actual = functions.mathEnforcer.addFive(2.25);
        expect(actual).to.be.closeTo(7.25, 0.01)
    })

    it('Adds 5 Undefined', () => {

        expect(functions.mathEnforcer.addFive('Ace')).to.be.undefined
    })
    it('Subtracts 10 Correctly Positive', () => {
        let actual = functions.mathEnforcer.subtractTen(15);
        let expected = 5;
        expect(expected).to.be.equal(actual)
    })
    it('Subtracts 10 Correctly Negative', () => {
        let actual = functions.mathEnforcer.subtractTen(-15);
        let expected = -25;
        expect(expected).to.be.equal(actual)
    })
    it('Subtracts 10 Correctly Floating', () => {
        let actual = functions.mathEnforcer.subtractTen(12.25);
        expect(actual).to.be.closeTo(2.25, 0.01)
    })
    it('Subtracts 10 Undefined', () => {
        expect(functions.mathEnforcer.subtractTen(null)).to.be.undefined
    })
    it('Sums 2 Numbers Correctly', () => {
        let actual = functions.mathEnforcer.sum(5, -6);
        let expected = -1;
        expect(expected).to.be.equal(actual)
    })
    it('Sums 2 Numbers Correctly Floating', () => {
        let actual = functions.mathEnforcer.sum(12.25, 25.50);
        expect(actual).to.be.closeTo(37.75, 0.01)
    })
    it('Sums 2 Numbers Undefined', () => {
        expect(functions.mathEnforcer.sum(String, 10.5)).to.be.undefined
        expect(functions.mathEnforcer.sum(10.5, String)).to.be.undefined
    })
});

describe('Array Analizer', () => {
    it('Undefined', () => {
        expect(functions.analyzeArray(null)).to.be.undefined
        expect(functions.analyzeArray([])).to.be.undefined
        expect(functions.analyzeArray('null')).to.be.undefined
        expect(functions.analyzeArray(5)).to.be.undefined
    })
    it('Correctly', () => {
        let input = [1, 10, 20, 12, 95, 23]
        let expected = {
            min: 1,
            max: 95,
            length: 6
        }

        let actual = functions.analyzeArray(input)
        expect(actual).to.be.deep.equal(expected)
    })
    it('Correctly One Number', () => {
        let input = [1]
        let expected = {
            min: 1,
            max: 1,
            length: 1
        }

        let actual = functions.analyzeArray(input)
        expect(actual).to.be.deep.equal(expected)
    })
    it('Correctly Same Numbers', () => {
        let input = [10, 10, 10, 10, 10]
        let expected = {
            min: 10,
            max: 10,
            length: 5
        }

        let actual = functions.analyzeArray(input)
        expect(actual).to.be.deep.equal(expected)
    })
})

describe("Art Gallery", () => {
    describe("Add Art", () => {
        it("error for not string", () => {
            expect(() => functions.artGallery.addArtwork(123, "10 x 20", "Picasso")).to.throw("Invalid Information!")
            expect(() => functions.artGallery.addArtwork("123", "10 x 20", 123)).to.throw("Invalid Information!")
        })
        it("error for invalid dimensions", () => {
            expect(() => functions.artGallery.addArtwork("123", "1020", "Picasso")).to.throw("Invalid Dimensions!")
        })
        it("error for invalid artist", () => {
            expect(() => functions.artGallery.addArtwork("123", "10 x 20", "Ace")).to.throw("This artist is not allowed in the gallery!")
        })
        it("correctly", () => {
            expect(functions.artGallery.addArtwork("Art", "10 x 20", "Picasso")).to.equal("Artwork added successfully: 'Art' by Picasso with dimensions 10 x 20.")
        })
    })
    describe("Calculate Costs", () => {
        it("error for invalid input", () => {
            expect(() => functions.artGallery.calculateCosts(100, "200", true)).to.throw("Invalid Information!")
            expect(() => functions.artGallery.calculateCosts(100, 200, "true")).to.throw("Invalid Information!")
            expect(() => functions.artGallery.calculateCosts("100", 200, true)).to.throw("Invalid Information!")
            expect(() => functions.artGallery.calculateCosts(-100, 200, true)).to.throw("Invalid Information!")
            expect(() => functions.artGallery.calculateCosts(100, -200, true)).to.throw("Invalid Information!")
        })
        it("total costs", () => {
            expect(functions.artGallery.calculateCosts(100, 200, true)).to.equal("Exhibition and insurance costs are 270$, reduced by 10% with the help of a donation from your sponsor.")
            expect(functions.artGallery.calculateCosts(100, 200, false)).to.equal("Exhibition and insurance costs are 300$.")
        })
    })
    describe("organize exhibits", () => {
        it("error for invalid input", () => {
            expect(() => functions.artGallery.organizeExhibits(10, "20")).to.throw("Invalid Information!")
            expect(() => functions.artGallery.organizeExhibits("10", 20)).to.throw("Invalid Information!")
            expect(() => functions.artGallery.organizeExhibits(-10, 20)).to.throw("Invalid Information!")
            expect(() => functions.artGallery.organizeExhibits(10, -20)).to.throw("Invalid Information!")
        })
        it("artworks per space", () => {
            expect(functions.artGallery.organizeExhibits(24, 5)).to.equal("There are only 4 artworks in each display space, you can add more artworks.")
            expect(functions.artGallery.organizeExhibits(38, 6)).to.equal("You have 6 display spaces with 6 artworks in each space.")
        })
    })
});

describe("Food Delivery", () => {
    describe("Catagory", () => {
        it("Vegan", () => {
            expect(foodDelivery.getCategory("Vegan")).to.equal("Dishes that contain no animal products.")
        })
        it("Vegetarian", () => {
            expect(foodDelivery.getCategory("Vegetarian")).to.equal("Dishes that contain no meat or fish.")
        })
        it("Gluten-Free", () => {
            expect(foodDelivery.getCategory("Gluten-Free")).to.equal("Dishes that contain no gluten.")
        })
        it("All", () => {
            expect(foodDelivery.getCategory("All")).to.equal("All available dishes.")
        })
        it("Error", () => {
            expect(() => foodDelivery.getCategory("Tasty")).to.throw("Invalid Category!")
        })

    })
    describe("Menu Items", () => {
        it("Add menu item", () => {
            expect(foodDelivery.addMenuItem([{ name: "Pizza", price: 10 }, { name: "Spaghetti", price: 15 }, { name: "Steak", price: 25 }], 20)).to.equal("There are 2 available menu items matching your criteria!")
        })
        it("Error in input", () => {
            expect(() => foodDelivery.addMenuItem("Spaghetti", 20)).to.throw("Invalid Information!")
            expect(() => foodDelivery.addMenuItem([{ name: "Pizza", price: 10 }, { name: "Spaghetti", price: 15 }, { name: "Steak", price: 25 }], "20")).to.throw("Invalid Information!")
            expect(() => foodDelivery.addMenuItem([{ name: "Pizza", price: 10 }, { name: "Spaghetti", price: 15 }, { name: "Steak", price: 25 }], 3)).to.throw("Invalid Information!")
            expect(() => foodDelivery.addMenuItem([], 20)).to.throw("Invalid Information!")
        })
    })
    describe("Order Costs", () => {
        it("calculate order cost", () => {
            expect(foodDelivery.calculateOrderCost(["express", "standard"], ["sauce", "beverage"], true)).to.equal("You spend $10.63 for shipping and addons with a 15% discount!")
            expect(foodDelivery.calculateOrderCost(["express", "standard"], ["sauce", "beverage"], false)).to.equal("You spend $12.50 for shipping and addons!")
            expect(() => foodDelivery.calculateOrderCost("express", ["sauce", "beverage"], true)).to.throw("Invalid Information!")
            expect(() => foodDelivery.calculateOrderCost(["express", "standard"], "sauce", true)).to.throw("Invalid Information!")
            expect(() => foodDelivery.calculateOrderCost(["express", "standard"], ["sauce", "beverage"], "true")).to.throw("Invalid Information!")
        })
    })
});
describe("Workforce Management", () => {
    describe("Recruit Staff", () => {
        it("not developer", () => {
            expect(() => workforceManagement.recruitStaff("Ace", "Supervisor", 10)).to.throw("We are not currently hiring for this role.")
        })
        it("not enough EXP", () => {
            expect(workforceManagement.recruitStaff("Ace", "Developer", 3)).to.equal("Ace is not suitable for this role.")
        })
        it("valid for work", () => {
            expect(workforceManagement.recruitStaff("Ace", "Developer", 10)).to.equal("Ace has been successfully recruited for the role of Developer.")
        })
    })
    describe("Wages", () => {
        it("invalid input", () => {
            expect(() => workforceManagement.computeWages(-10)).to.throw("Invalid hours")
            expect(() => workforceManagement.computeWages("10")).to.throw("Invalid hours")
        })
        it("normal wage", () => {
            expect(workforceManagement.computeWages(100)).to.equal(1800)
        })
        it("bonus wage", () => {
            expect(workforceManagement.computeWages(200)).to.equal(5100)
        })
    })
    describe("Dismiss Employee", () => {
        it("invalid input", () => {
            expect(() => workforceManagement.dismissEmployee(["Ace", "King", "Queen", "Jack"], "2")).to.throw("Invalid input")
            expect(() => workforceManagement.dismissEmployee("Ace", 2)).to.throw("Invalid input")
            expect(() => workforceManagement.dismissEmployee(["Ace", "King", "Queen", "Jack"], 5)).to.throw("Invalid input")
        })
        it("normal dismiss", () => {
            expect(workforceManagement.dismissEmployee(["Ace", "King", "Queen", "Jack"], 2)).to.equal("Ace, King, Jack")
        })
    })
});