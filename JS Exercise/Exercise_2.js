function theatrePromotions(day, age) {
    let result;
    if (age < 0 || age > 122) {
        console.log('Error!')
    } else if (day == 'Weekday') {
        if (age >= 0 && age <= 18) {
            console.log('12$')
        } else if (age > 18 && age <= 64) {
            console.log('18$')
        } else if (age > 64 && age <= 122) {
            console.log('12$')
        }
    } else if (day == 'Weekend') {
        if (age >= 0 && age <= 18) {
            console.log('15$')
        } else if (age > 18 && age <= 64) {
            console.log('20$')
        } else if (age > 64 && age <= 122) {
            console.log('15$')
        }
    } else if (day == 'Holiday') {
        if (age >= 0 && age <= 18) {
            console.log('5$')
        } else if (age > 18 && age <= 64) {
            console.log('12$')
        } else if (age > 64 && age <= 122) {
            console.log('10$')
        }
    }
}
function ages(input) {
    let age = parseInt(input)
    if (age >= 0 && age <= 2) {
        console.log('baby')
    }
    else if (age >= 3 && age <= 13) {
        console.log('child')
    }
    else if (age >= 14 && age <= 19) {
        console.log('teenager')
    }
    else if (age >= 20 && age <= 65) {
        console.log('adult')
    }
    else if (age >= 66) {
        console.log('elder')
    }
    else {
        console.log('out of bounds')
    }

}
function vacation(arr) {
    let total;
    let price;
    let discount = 1;
    let peopleNum = arr[0]
    let type = arr[1]
    let day = arr[2]
    if (type == 'Students' && peopleNum >= 30) {
        discount = 0.85;
    }
    else if (type == 'Business' && peopleNum >= 100) {
        peopleNum = peopleNum - 10;
    }
    else if (type == 'Regular' && peopleNum >= 10 && peopleNum <= 20) {
        discount = 0.95
    }

    if (type == 'Students') {
        if (day == 'Friday') {
            price = 8.45
        }
        else if (day == 'Saturday') {
            price = 9.80
        }
        else if (day == 'Sunday') {
            price = 10.46
        }
    }
    if (type == 'Business') {
        if (day == 'Friday') {
            price = 10.90
        }
        else if (day == 'Saturday') {
            price = 15.60
        }
        else if (day == 'Sunday') {
            price = 16
        }
    }
    if (type == 'Regular') {
        if (day == 'Friday') {
            price = 15
        }
        else if (day == 'Saturday') {
            price = 20
        }
        else if (day == 'Sunday') {
            price = 22.50
        }
    }
    total = (price * peopleNum) * discount
    console.log(`Total price: ${total.toFixed(2)}`)
}
function leapYear(year) {
    year = parseInt(year)
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log('yes')
    }
    else {
        console.log('no')
    }
}
function printAndSum(arr) {
    num1 = parseInt(arr[0])
    num2 = parseInt(arr[1])
    let result = ''
    let sum = 0

    for (let i = num1; i <= num2; i++) {
        result += i + ' '
        sum += i
    }
    console.log(result.trimEnd())
    console.log(`Sum: ${sum}`)
}
function multiplicationTable(num) {
    num = Number(num)
    for (let index = 1; index <= 10; index++) {
        console.log(`${num} X ${index} = ${num * index}`);

    }
}
function sumDigits(num) {
    let digits = num.toString().split('')
    let sum = 0
    for (let digit of digits) {
        sum += Number(digit)
    }
    console.log(sum)
}
function reversedChars(arr) {
    let output = `${arr[2]} ${arr[1]} ${arr[0]}`;
    console.log(output)
}
function fruit(arr) {
    let type = arr[0]
    let weight = arr[1] / 1000
    let price = arr[2]
    let total = price * weight
    let output = `I need $${total.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${type}.`
    console.log(output)
}
function sameNumbers(num) {
    let strNum = '' + num
    let firstDigit = strNum[0]
    let allSame = true
    let sum = 0

    for (let digit of strNum) {
        if (digit !== firstDigit) {
            allSame = false
        }
        sum += parseInt(digit)
    }
    console.log(allSame)
    console.log(sum)
}
function roadRadar(arr) {
    let speed = arr[0];
    let area = arr[1];
    let speedLimit;
    let speedingStatus;
    let speedDifference;
    if (area == 'motorway') {
        speedLimit = 130
    }
    else if (area == 'interstate') {
        speedLimit = 90
    }
    else if (area == 'city') {
        speedLimit = 50
    }
    else {
        speedLimit = 20
    }
    if (speedLimit >= speed) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
    }
    else {
        speedDifference = speed - speedLimit
        if (speedDifference >= 1 && speedDifference <= 20) {
            speedingStatus = 'speeding'
        }
        else if (speedDifference > 20 && speedDifference <= 40) {
            speedingStatus = 'excessive speeding'
        }
        else {
            speedingStatus = 'reckless driving'
        }
        console.log(`The speed is ${speedDifference} km/h faster than the allowed speed of ${speedLimit} - ${speedingStatus}`)
    }
}
function cookingWithNumbers(arr) {
    let num = parseInt(arr[0])
    arr.splice(0, 1)
    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] == 'chop') {
            num /= 2
            console.log(num)
        }
        else if (arr[i] == 'dice') {
            num = Math.sqrt(num)
            console.log(num)
        }
        else if (arr[i] == 'spice') {
            num += 1
            console.log(num)
        }
        else if (arr[i] == 'bake') {
            num = num * 3
            console.log(num)
        }
        else if (arr[i] == 'fillet') {
            num = num - (num * 0.2)
            console.log(num)
        }
    }
}
cookingWithNumbers(['9', 'dice', 'spice', 'chop', 'bake',

    'fillet'])




