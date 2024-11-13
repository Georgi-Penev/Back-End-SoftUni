function numByTwo(num) {
    console.log(num * 2)
}

function studentInfo(name, age, grade) {
    console.log(`Name: ${name}, Age: ${age}, Grade: ${grade.toFixed(2)}`)
}

function excellentGrade(num) {
    if (num >= 5.50) {
        console.log("Excellent")
    }
    else {
        console.log("Not excellent")
    }
}
function monthPrinter(num) {
    if (num == 1) {
        console.log("January")
    }
    else if (num == 2) {
        console.log("February")
    }
    else if (num == 3) {
        console.log("March")
    }
    else if (num == 4) {
        console.log("April")
    }
    else if (num == 5) {
        console.log("May")
    }
    else if (num == 6) {
        console.log("June")
    }
    else if (num == 7) {
        console.log("July")
    }
    else if (num == 8) {
        console.log("August")
    }
    else if (num == 9) {
        console.log("September")
    }
    else if (num == 10) {
        console.log("October")
    }
    else if (num == 11) {
        console.log("November")
    }
    else if (num == 12) {
        console.log("December")
    }
    else {
        console.log("Error!")
    }
}
function mathOperations(num1, num2, operation) {
    let result;

    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '%':
            result = num1 % num2;
            break;
        case '**':
            result = num1 ** num2;
            break;
    }
    console.log(result)
}
function largestNumber(num1, num2, num3) {
    let result = Math.max(num1, num2, num3)
    console.log(`The largest number is ${result}.`)
}
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
function circleArea(input) {
    let result;
    let inputType = typeof (input);
    if (inputType === 'number') {
        result = Math.pow(input, 2) * Math.PI;
        console.log(result.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we received a ${inputType}.`);
    }
}
function number1to5(input) {
    for (let i = 1; i <= 5; i++) {
        console.log(i)
    }
}
function numberMtoN(m, n) {
    for (let i = m; i >= n; i--) {
        console.log(i)
    }
}
function sumFirstAndLastArrayElements(arr) {
    let num1 = Number(arr[0]);
    let num2 = Number(arr[arr.length - 1]);
    console.log(num1 + num2)
}
function reverseAnArrayOfNumbers(num, arr) {
    let newArr = [];
    for (let i = 0; i < num; i++) {
        newArr.unshift(arr[i])
    }
    let output = "";
    for (let i = 0; i < newArr.length; i++) {
        output = output + newArr[i] + " "
    }
    console.log(output)
}

