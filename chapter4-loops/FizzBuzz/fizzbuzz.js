"use strict";

// Numbers between 1 and 100
// Display Fizz if it can be divided by 3
// Display Buzz if it can be divided by 5 but not by 3
// Display FizzBuzz if it can be divided by both

for (let i = 1; i <= 100; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

