/**
 * Recursion is great to use with tree structures
 */

// Factorial: a number times the preceding numbers
function factorial(n) {
    if (n === 1) {
        return 1;  // stops the iteration
    }
    return factorial(n - 1) * n;  // keeps the new value
}
console.log(factorial(4));