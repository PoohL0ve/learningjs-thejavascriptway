"use strict";

// Using if/else to show the following day

let day = String(prompt("Enter a day"));
if (day === "Monday") {
    alert("Today is Tuesday");
} else if (day === "Tuesday") {
    alert("Today is Wednesday");
} else if (day === "Wednesday") {
    alert("Today is Thursday");
} else if (day === "Thursday") {
    alert("Today is Friday");
} else if (day === "Friday") {
    alert("Today is Saturday");
} else if (day === "Saturday") {
    alert("Today is Sunday");
} else if (day === "Sunday") {
    alert("Today is Monday");
} else {
    alert("Please enter a valid day with the first letter being capitalised.")
}

// Comparing two numbers

let num1 = 5;
let num2 = 12;
if (num1 <= num2) {
    console.log("Smaller than");
}
else {
    console.log('Invalid number');
}

// Number of days in a month

let month = Number(prompt("Enter a number between 1 and 12"));
switch(month) {
    case 1:
        alert("Hmm someone doen't listen but...\nDid you know there are 31 days in January");
        break;
    case 2:
        alert("An interesting month, sometimes 28 days, sometimes 29\n Hmm fascinating!");
        break;    
    case 3:
        alert("Contains 31 days of green bliss");
        break;  
    case 4:
        alert("Did someone say 30 days of Easter?");
        break;   
    case 5:
        alert("Preparing for summer?\n 31 days to get that body right");
        break;
    case 6: 
        alert("30 days to make it rain");
        break;
    case 7:
        alert("31 days of bugs, who wants that?");
        break;
    case 8:
        alert("Back to school, back to work. 31 days feeling brand new");
        break;
    case 9:
        alert("There are 30 days in September");
        break;   
    case 10:
        alert("The month for Halloween has 31 days in it");
        break;
    case 11:
        alert("Happy Thanks Giving, but remember there are 30 days in November");
        break;
    case 12:
        alert("Why didn't you follow the instructions?\nMust be feeling jolly huh\n31 days of Santa");
        break;
    default:
        alert("what's wrong with you?\nDon't answer that.");                      
}   