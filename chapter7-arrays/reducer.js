/**
 * The reduce method accumulates the values in an array into
 * a single value. It uses an accumulator and a current value.
 * It is the array.prototype.reduce
 * It takes a third argument as a positional/index
 */
const values = [1, 2, 3, 4];
const singleValue = values.reduce((a, c) => {
    // where a is the iteration value and c is the current value (next)
    return a + c;
});
console.log(singleValue);

// Find the largest number
const numbList = [3, 2, 6, 4];
const largest = numbList.reduce((a, c) => {
    return (a > c ? a : c);
}, 1); // initial value incase there is no positive
console.log(largest);