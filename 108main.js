"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// This function compares two strings, ignoring case sensitivity
function areStringsEqualIgnoreCase(str1, str2) {
    // Converts both strings to lowercase before comparison
    return str1.toLowerCase() === str2.toLowerCase();
}
console.log(areStringsEqualIgnoreCase("hello", "Hello")); // Outputs: true
console.log(areStringsEqualIgnoreCase("world", "Word")); // Outputs: false
// We make both strings lowercase to ensure the comparison ignores case differences.
//   1 comment on commit 447201a
