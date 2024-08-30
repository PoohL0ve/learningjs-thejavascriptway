"use strict";

// When the number is between 50 and 100 stop the program.

while (number <= 100) {
    let number = Number(prompt("Let's play with numbers\n Enter a number: "));
    if ((number >= 50) && (number <= 100)) {
        break;
    }
    number++ 
}