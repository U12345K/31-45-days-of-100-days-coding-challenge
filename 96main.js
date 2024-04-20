"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// This function calculates the sum of all numbers in an array
function calculateSum(numbersm) {
    return numbersm.reduce((accumulator, current) => accumulator + current, 0);
}
// Example: Calculating the sum of an array of numbers
const numbersm = [1, 2, 3, 4, 5];
console.log(calculateSum(numbersm)); // Outputs: 15
// It adds up all the numbers in the array, resulting in a single sum value.
