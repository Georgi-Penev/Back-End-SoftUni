export function isOddOrEven(string) {
    if (typeof (string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }
    return "odd";
}

export function lookupChar(string, index) {
    if (typeof (string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }
    return string.charAt(index);
}

export let mathEnforcer = {
    addFive: function (num) {
        if (typeof (num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof (num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof (num1) !== 'number' || typeof (num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

export function analyzeArray(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return undefined;
    }
    let min = arr[0];
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
            return undefined;
        }
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return { min, max, length: arr.length };
}

export const artGallery = {
    addArtwork(title, dimensions, artist) {
        if (typeof title !== "string" || typeof artist !== "string") {
            throw new Error("Invalid Information!");
        }
        if (!/^\d+ x \d+$/.test(dimensions)) {
            throw new Error("Invalid Dimensions!");
        }
        const validArtists = ["Van Gogh", "Picasso", "Monet"];
        if (!validArtists.includes(artist)) {
            throw new Error("This artist is not allowed in the gallery!");
        }
        return `Artwork added successfully: '${title}' by ${artist} with dimensions ${dimensions}.`;
    },
    calculateCosts(exhibitionCosts, insuranceCosts, sponsor) {
        if (typeof exhibitionCosts !== "number" ||
            typeof insuranceCosts !== "number" ||
            typeof sponsor !== "boolean" ||
            exhibitionCosts < 0 ||
            insuranceCosts < 0) {
            throw new Error("Invalid Information!");
        }
        let totalPrice = exhibitionCosts + insuranceCosts;
        if (sponsor) {
            totalPrice *= 0.9;
            return `Exhibition and insurance costs are ${totalPrice}$, reduced by 10% with the help of a donation from your sponsor.`;
        } else {
            return `Exhibition and insurance costs are ${totalPrice}$.`;
        }
    },
    organizeExhibits(artworksCount, displaySpacesCount) {
        if (typeof artworksCount !== "number" ||
            typeof displaySpacesCount !== "number" ||
            artworksCount <= 0 ||
            displaySpacesCount <= 0) {
            throw new Error("Invalid Information!");
        }
        let artworksPerSpace = Math.floor(artworksCount / displaySpacesCount);
        if (artworksPerSpace < 5) {
            return `There are only ${artworksPerSpace} artworks in each display space, you can add more artworks.`;
        } else {
            return `You have ${displaySpacesCount} display spaces with ${artworksPerSpace} artworks in each space.`;
        }
    },
};

export const foodDelivery = {
    getCategory(category) {
        if (category === "Vegan") {
            return "Dishes that contain no animal products.";
        } else if (category === "Vegetarian") {
            return "Dishes that contain no meat or fish.";
        } else if (category === "Gluten-Free") {
            return "Dishes that contain no gluten.";
        } else if (category === "All") {
            return "All available dishes.";
        } else {
            throw new Error("Invalid Category!");
        }
    },
    addMenuItem(menuItem, maxPrice) {
        if (
            !Array.isArray(menuItem) ||
            typeof maxPrice !== "number" ||
            menuItem.length < 1 ||
            maxPrice < 5
        ) {
            throw new Error("Invalid Information!");
        }
        let availableItems = [];
        menuItem.forEach((item) => {
            if (item.price <= maxPrice) {
                availableItems.push(item);
            }
        });
        return `There are ${availableItems.length} available menu items matching your criteria!`;
    },
    calculateOrderCost(shipping, addons, discount) {
        if (
            !Array.isArray(shipping) ||
            !Array.isArray(addons) ||
            typeof discount !== "boolean"
        ) {
            throw new Error("Invalid Information!");
        }
        let totalPrice = 0;

        shipping.forEach((item) => {
            if (item === "standard") {
                totalPrice += 3;
            } else if (item === "express") {
                totalPrice += 5;
            }
        });
        addons.forEach((item) => {
            if (item === "sauce") {
                totalPrice += 1;
            } else if (item === "beverage") {
                totalPrice += 3.5;
            }
        });
        if (discount) {
            totalPrice = totalPrice * 0.85;
            return `You spend $${totalPrice.toFixed(2)} for shipping and addons with a 15% discount!`;
        } else {
            return `You spend $${totalPrice.toFixed(2)} for shipping and addons!`;
        }
    },
};

export const workforceManagement = {

    recruitStaff(name, role, experience) {
        if (role === "Developer") {
            if (experience >= 4) {
                return `${name} has been successfully recruited for the role of ${role}.`;
            } else {
                return `${name} is not suitable for this role.`;
            }
        }
        throw new Error(`We are not currently hiring for this role.`);
    },

    computeWages(hoursWorked) {
        let hourlyRate = 18;
        let totalPayment = hourlyRate * hoursWorked;

        if (typeof hoursWorked !== "number" || hoursWorked < 0) {
            throw new Error("Invalid hours");
        } else if (hoursWorked > 160) {
            totalPayment += 1500;
        }
        return totalPayment;
    },

    dismissEmployee(workforce, employeeIndex) {
        let updatedStaff = [];

        if (!Array.isArray(workforce) || !Number.isInteger(employeeIndex) || employeeIndex < 0 || employeeIndex >= workforce.length) {
            throw new Error("Invalid input");
        }
        for (let i = 0; i < workforce.length; i++) {
            if (i !== employeeIndex) {
                updatedStaff.push(workforce[i]);
            }
        }
        return updatedStaff.join(", ");
    }
};
