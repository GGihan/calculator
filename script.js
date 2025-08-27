function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let sum;
let firstNum;
let secondNum;
let operation;

function operate(operator, firstNum, secondNum) {
    if (operator === '+') {
        sum = add(firstNum, secondNum);
    } else if (operator === '-') {
        sum = subtract(firstNum, secondNum);
    } else if (operator === '*') {
        sum = multiply(firstNum, secondNum);
    } else if (operator === '/') {
        sum = divide(firstNum, secondNum);
    };
    return sum;
}

console.log(operate('/', 4, 6));