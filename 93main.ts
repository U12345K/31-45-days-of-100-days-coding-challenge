// This function finds "Banana" in the fruits array and replaces it with "Mango"
function replaceBananaWithMango(fruitsm: string[]): void {
    const index = fruitsm.indexOf("Banana"); // Finds the index of "Banana"
    if (index !== -1) fruitsm[index] = "Mango"; // Replaces "Banana" with "Mango" if found
}

// Example: Replacing "Banana" in the array
const fruitsm: string[] = ["Apple", "Banana", "Cherry"];
replaceBananaWithMango(fruitsm);
console.log(fruitsm); // Outputs: ['Apple', 'Mango', 'Cherry']
// We're swapping "Banana" for "Mango" in our fruit list.