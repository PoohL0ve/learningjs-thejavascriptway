"use strict";

// Using the if statement and the && logical operator

let seconds = Number(prompt("Enter the number of seconds currently on your watch:"));
let minutes = Number(prompt("Enter the current minute on your timepiece"));
let hour = Number(prompt("Enter the current hour on your time piece"));

if ((seconds >= 0) && (seconds <= 58)) {
    seconds += 1;
    alert(`${hour}h${minutes}m${seconds}s`);
} else if ((seconds === 59) && (minutes <= 58)) {
    seconds = 0;
    minutes += 1;
    alert(`${hour}h${minutes}m${seconds}s`);
} else if ((seconds === 59) && (minutes === 59)) {
    seconds = 0;
    minutes = 0;
    hour += 1;
    alert(`${hour}h${minutes}m${seconds}s`);
} else if ((seconds === 59) && (minutes === 59) && (hour === 23)) {
    seconds = 0;
    minutes = 0;
    hour = 0;
    alert(`${hour}h${minutes}m${seconds}s`);
} else {
    alert("Please enter a valid time using the 24 hour clock.");
}