function evenAndOddSubstraction(arr) {
    let evenSum = 0
    let oddSum = 0

    for (let number of arr) {
        if (number % 2 == 0) {
            evenSum += number
        }
        else {
            oddSum += number
        }
    }
    console.log(evenSum - oddSum)
}

function substring(string, startIndex, count) {
    let result = string.substr(startIndex, count)
    console.log(result)
}

function censoredWords(text, word) {
    let stars = '*'.repeat(word.length)
    let censored = text.replace(word, stars)
    while (censored.includes(word)) {
        censored = censored.replace(word, stars)
    }
    console.log(censored)
}
function countStringOccurrences(text, word) {
    let splits = text.split(' ');
    let count = 0;
    for (let w of splits) {
        if (w == word) {
            count++
        }
    }
    console.log(count)
}
function formatGrade(grade) {
    if (grade < 3.00) {
        console.log('Fail (2)')
    } else if (grade >= 3.00 && grade < 3.50) {
        console.log(`Poor (${grade.toFixed(2)})`)
    } else if (grade >= 3.50 && grade < 4.50) {
        console.log(`Good (${grade.toFixed(2)})`)
    } else if (grade >= 4.50 && grade < 5.50) {
        console.log(`Very good (${grade.toFixed(2)})`)
    } else if (grade >= 5.50) {
        console.log(`Excellent (${grade.toFixed(2)})`)
    }
}
function mathPower(num, power) {
    console.log(Math.pow(num, power))
}
function repeatString(input, num) {

    console.log(input.repeat(num))

}
function orders(input, num) {
    let total = 0;
    if (input == 'coffee') {
        total = num * 1.50;
    } else if (input == 'water') {
        total = num * 1.00;
    } else if (input == 'coke') {
        total = num * 1.40;
    } else if (input == 'snacks') {
        total = num * 2.00;
    }
    console.log(total.toFixed(2))

}
function personInfo(firstName, lastName, age) {
    let person = {};
    person.firstName = firstName;
    person.lastName = lastName;
    person.age = age;
    return person;
}
function city({ name, area, population, country, postCode }) {
    let city = {};
    city['name'] = name
    city['area'] = area
    city['population'] = population
    city['country'] = country
    city['postCode'] = postCode
    for (let key in city) {
        console.log(key + ' -> ' + city[key])
    }
}
function phoneBook(input) {
    let phoneBook = {};

    for (let item of input) {

        let [name, number] = item.split(' ');


        phoneBook[name] = number;
    }

    for (let name in phoneBook) {
        console.log(`${name} -> ${phoneBook[name]}`);
    }
}
test('A small sentence small some words', 'small')