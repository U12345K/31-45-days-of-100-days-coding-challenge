"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// This function finds "Banana" in the fruits array and replaces it with "Mango"
function replaceBananaWithMango(fruitsm) {
    const index = fruitsm.indexOf("Banana"); // Finds the index of "Banana"
    if (index !== -1)
        fruitsm[index] = "Mango"; // Replaces "Banana" with "Mango" if found
}
// Example: Replacing "Banana" in the array
const fruitsm = ["Apple", "Banana", "Cherry"];
replaceBananaWithMango(fruitsm);
console.log(fruitsm); // Outputs: ['Apple', 'Mango', 'Cherry']
// We're swapping "Banana" for "Mango" in our fruit list.
