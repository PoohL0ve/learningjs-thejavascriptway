const Hurt = require("./Hurt");
// Another constructor using the first
// Object can inherit methods from the other class
// using Object.create()
function Attitude(name, duty, tune) {
    Hurt.call(this, name, duty);  // use call method
    this.tune = tune;
}
const behave = new Attitude("Tara", "Friend", "Aggresive");
console.log(behave.person.name);
console.log(behave.person.duty);
console.log(behave.tune);

Attitude.prototype = Object.create(Hurt.prototype);