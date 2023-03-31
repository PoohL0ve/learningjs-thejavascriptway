"use strict";

let yourWord = prompt("Please enter a word");

//return the length of the word and the values in lower and upper case
let lengthOfWord = yourWord.length;
let lowerCaseWord = yourWord.toLowerCase();
let upperCaseWord = yourWord.toUpperCase();
alert(`Here's your results\nLength: ${lengthOfWord}\nLowercase: ${lowerCaseWord}\nUppercase: ${upperCaseWord}`);

//show the number of vowels in the word
let vowels = 0;
for (let letter of yourWord) {
    if (letter === "A" || letter === "a" || letter === "E" || letter ===  "e"
    || letter === "I" || letter === "i" || letter === "U" || letter === "u" ||
    letter === "O" || letter === "o") {
        vowels++;
        console.log(vowels);
    }
}