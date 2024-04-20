// Answer of Q12:
// Creates a new Map to store countries and their capitals
const countriesn = new Map<string, string>();
countriesn.set("USA", "Washington, D.C."); // Adds USA to the Map
countriesn.set("France", "Paris"); // Adds France to the Map
countriesn.set("Japan", "Tokyo"); // Adds Japan to the Map

console.log(countriesn);
// Logs the Map with the countries and their capitals.

// Answer of Q13:
// This function checks for "Canada" in the Map and logs its capital
function logCapitalOfCanada(countriesn: Map<string, string>): void {
  if (countriesn.has("Canada")) {
    console.log(`The capital of Canada is ${countriesn.get("Canada")}`);
  } else {
    console.log("Canada is not in the Map.");
  }
}

// Assuming countries Map from Question 112
logCapitalOfCanada(countriesn);
// Checks if Canada is in our Map and logs the capital if it exists.