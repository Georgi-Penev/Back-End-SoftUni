function arrayRotation(input, rotate) {
    for (let i = 1; i <= rotate; i++) {
        let first = input.shift();
        input.push(first);
    }
    console.log(input.join(' '))
}
function printEveryNthElementfromAnArray(input, n) {
    let output = [];
    for (let i = 0; i <= input.length - 1; i += n) {
        output.push(input[i])
    }
    return (output)
}
function listOfNames(input) {
    const sorted = input.sort((e1, e2) => {
        return e1.localeCompare(e2)
    });
    for (i = 0; i < input.length; i++) {
        console.log(`${i + 1}.${sorted[i]}`)
    }
}
function sortingNumbers(input) {
    let sorted = input.sort((e1, e2) => {
        return e1 - e2
    })
    let arr = input.length
    let result = [];
    for (let i = 0; i <= arr - 1; i++) {
        if (i % 2 == 0) {
            result.push(sorted.shift())
        } else {
            result.push(sorted.pop())
        }
    }
    return result;
}
function revealWords(words, input) {
    const allWords = words.split(', ');
    for (const word of allWords) {
        let textToReplace = '*'.repeat(word.length)
        input = input.replace(textToReplace, word)
    }
    console.log(input)
}
function stringSubstring(word, input) {
    const isFoundWord = input.toLowerCase().split(' ').includes(word);
    if (isFoundWord) {
        console.log(word)
    } else {
        console.log(`${word} not found!`)
    }
}
function smallestOfThreeNumbers(num1, num2, num3) {
    console.log(Math.min(num1, num2, num3))
}
function addAndSubtract(num1, num2, num3) {
    console.log((num1 + num2) - num3)
}
function oddAndEvenSum(input) {
    let oddSum = 0;
    let evenSum = 0;
    while (input != 0) {
        let digit = input % 10;
        if (digit % 2 == 0) {
            evenSum += digit
        } else {
            oddSum += digit
        }
        input = Math.floor(input / 10);
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}
function passwordValidator(input) {
    const isValidLength = input.length >= 6 && input.length <= 10;
    const isValidContent = /^[a-zA-Z0-9]+$/.test(input)
    const isValidCount = (input.match(/\d/g) || []).length >= 2;

    if (isValidContent && isValidCount && isValidLength) {
        console.log('Password is valid')
    } else {
        if (!isValidLength) {
            console.log('Password must be between 6 and 10 characters')
        }
        if (!isValidContent) {
            console.log('Password must consist only of letters and digits')
        }
        if (!isValidCount) {
            console.log('Password must have at least 2 digits')
        }
    }
}
function employees(input) {
    const employees = [];

    for (const nameEmployee of input) {
        employees.push({
            name: nameEmployee,
            number: nameEmployee.length
        });
    }
    employees.forEach((employee) =>
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.number}`))
}
function towns(input) {
    const towns = [];
    for (let dataText of input) {
        const data = dataText.split(' | ')
        let town = data[0]
        let latitude = data[1]
        let longitude = data[2]
        towns.push({
            town: town,
            latitude: parseFloat(latitude).toFixed(2),
            longitude: parseFloat(longitude).toFixed(2)
        });
    }
    towns.forEach((town) => console.log(town))
}
function storeProvision(stock, order) {
    let merged = {}
    for (i = 0; i < stock.length; i += 2) {
        let product = stock[i]
        let quantity = parseInt(stock[i + 1])

        merged[product] = (merged[product] || 0) + quantity;
    }
    for (i = 0; i < order.length; i += 2) {
        let product = order[i]
        let quantity = parseInt(order[i + 1])

        merged[product] = (merged[product] || 0) + quantity;
    }
    for (let product in merged) {
        console.log(`${product} -> ${merged[product]}`)
    }
}
function movies(input) {
    let movies = [];

    function addMovie(movieName) {
        movies.push({ name: movieName });
    }

    function addDirector(movieName, director) {
        let movie = movies.find(movie => movie.name === movieName);
        if (movie) {
            movie.director = director;
        }
    }

    function addDate(movieName, date) {
        let movie = movies.find(movie => movie.name === movieName);
        if (movie) {
            movie.date = date;
        }
    }

    input.forEach(command => {
        let tokens = command.split(' ');

        if (tokens.includes('addMovie')) {
            let erace = tokens.shift();
            let movieName = tokens.join(' ')
            addMovie(movieName);
        } else if (tokens.includes('directedBy')) {
            let index = tokens.indexOf('directedBy');
            let movieName = tokens.slice(0, index).join(' ')
            let director = tokens.slice(index + 1).join(' ');
            addDirector(movieName, director);
        } else if (tokens.includes('onDate')) {
            let index = tokens.indexOf('onDate');
            let movieName = tokens.slice(0, index).join(' ')
            let date = tokens.slice(index + 1).join(' ');
            addDate(movieName, date);
        }
    });

    let filteredMovies = movies.filter(movie => movie.name && movie.director && movie.date);
    filteredMovies.forEach(element => console.log(JSON.stringify(element)));
}
function inventory(input) {
    let heroes = [];

    input.forEach(heroInfo => {
        let [heroName, heroLevel, itemsStr] = heroInfo.split(' / ');
        let items = itemsStr ? itemsStr.split(', ') : [];
        heroes.push({ name: heroName, level: Number(heroLevel), items: items });
    });

    heroes.sort((a, b) => a.level - b.level);
    heroes.forEach(hero => {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items.join(', ')}`);
    });
}
function oddOccurrences(sentence) {
    const words = sentence.toLowerCase().split(' ');
    const wordCount = [];

    words.forEach(word => {
        const existingWord = wordCount.find(item => item.word === word);
        if (existingWord) {
            existingWord.count++;
        } else {
            wordCount.push({ word, count: 1 });
        }
    });

    const oddOccurrences = wordCount.filter(item => item.count % 2 !== 0).map(item => item.word);
    console.log(oddOccurrences.join(' '))
}
function piccolo(input) {
    let parkingLot = new Set();

    input.forEach(entry => {
        let [direction, carNumber] = entry.split(', ');
        if (direction === 'IN') {
            parkingLot.add(carNumber);
        } else if (direction === 'OUT') {
            parkingLot.delete(carNumber);
        }
    });
    if (parkingLot.size === 0) {
        console.log("Parking Lot is Empty");
    } else {
        let sortedCarNumbers = Array.from(parkingLot).sort();
        sortedCarNumbers.forEach(element => console.log(element))
    }
}