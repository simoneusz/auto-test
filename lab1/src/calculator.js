export function add(number1, number2) {
    return number1 + number2;
}

export function subtract(number1, number2) {
    return number1 - number2;
}

export function multiply(number1, number2) {
    return number1 * number2;
}

export function divide(number1, number2) {
    if (number2 === 0)return NaN
    return number1 / number2;
}