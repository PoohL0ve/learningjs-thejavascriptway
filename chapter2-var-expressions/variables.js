"use strict";

// Using prompt and alert to display information to the user

let firstName = prompt("What's your first name?\n");
let lastName = prompt("What's your last name?");
alert(`It's a pleasure to meet you ${firstName} ${lastName}`);

// Finding/observing values

let a = 2;
a -= 1;
a++;
let b = 8;
b += 2;
const c = a + b * b;
const d = a * b + b;
const e = a * (b + b);
const f = a * b / a;
const g = b / a * a;
console.log(a, b, c, d, e, f, g);

// Using VAT at a rate of 20.6%

let price = Number(prompt("Enter the cost of your items:"));
let vatRate = 20.6;
let netPrice = (price * 20.6 / 100) + price;
alert(`Your total cost is ${netPrice}`);

// Converting Celsius to Farenheit

let temperature = Number(prompt("Tell me your temperature using celsius:"));
let farenheit = (temperature * 9/5) + 32;
alert(`Oh ${farenheit} is good`);
