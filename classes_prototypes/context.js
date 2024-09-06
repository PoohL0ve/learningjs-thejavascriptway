/* 
The 'this' keyword specifies a variable in the module.
The call  and apply functions allows for this to be used in functions
*/

// Using call() and this
const women = ["Tara", "Ariesha", "PW"]
function displayValues() {
    return [this.t, this.a, this.p];
}
console.log(displayValues.call({t: "Tara", a: "Ariesha", p: "PW"}));

// apply takes an array as it argument
// the bind function this an argument to this keyword
// in a function. This cannot be change
function displayName() {
    return this.name;
}
const newFunction = displayName.bind({name: "Tara"});
console.log(newFunction());

// this can be used in objects as part of the function
const learning = {
    years: 4,
    getYears: function() {
        return this.years  // it not fully bound
    }
}
console.log(learning.getYears()); // using brackets