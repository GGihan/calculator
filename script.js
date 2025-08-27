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

let sum = "";
let firstNum = "";
let secondNum = "";
let operation = "";

function operate(operator, firstNum, secondNum) {
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);
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

let allButtons = Array.from(document.querySelectorAll("button"));
let display = document.querySelector("#display");
let input;
let fullEquation;
let calculated = false;

function clearInputsWithSum() {
    firstNum = "";
    secondNum = "";
    operation = "";
    input = "";
    sum = "";
    calculated = false;
}

function clearInputsWithoutSum() {
    firstNum = "";
    secondNum = "";
    operation = "";
    input = "";
    calculated = false;
}

function assignInput(input) {
    if (!isNaN(input)) {
        if (!firstNum || !operation) {
            firstNum += input;
            operation = "";
        } else {
            secondNum += input;
        }
    } else {
        if (input === "=" && (firstNum && secondNum && operation)) {
            calculated = true;
            operate(operation, firstNum, secondNum);
        } else if (input === "AC" || input === "CE") {
            clearInputsWithSum();
        } else if (input !== "=" && !calculated) {
            operation = input;
        } else {
            clearInputsWithoutSum();
            firstNum = sum;
            sum = "";
            operation = input;
        }  
    };
}

function addEvent() {
    for (let button of allButtons) {
        button.addEventListener("click", () => {
            input = button.textContent;
            assignInput(input);
            console.log(firstNum);
            console.log(operation);
            console.log(secondNum);
            console.log(sum);
            fullEquation = getFullEquation(firstNum, operation, secondNum, sum);
            display.textContent = fullEquation;
        });
    }
}

function getFullEquation(firstNum, operation, secondNum, sum) {
    return `${firstNum} ${operation} ${secondNum} = ${sum}`;
}

addEvent();