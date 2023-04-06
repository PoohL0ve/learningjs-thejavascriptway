"use strict";
// dsiplaying odd and even numbers between 1 and 10

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      console.log(`${i} is even`);
    }
    else {
        if (i % 2 !== 0)
        console.log(`${i} is odd`);
    }
  }