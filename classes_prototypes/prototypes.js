/**
 * Prototypes are similar to classes, as they allow
 * state and methods to be shared among object
 */

// Constructor in JS
function Hurt(name, duty) {
    this.person = {name, duty};
}

// Add functionality
Hurt.prototype.change = function(name, duty) {
    this.person.name = name;
    this.person.duty = duty;
}
// testing
const abe = new Hurt("Abe", "Slow Texter");
console.log(abe.person.name);  // must use the object name
abe.change("Abe Atalanta", "I hate that I love you");
console.log(abe.person.name);
console.log(abe.person.duty);


