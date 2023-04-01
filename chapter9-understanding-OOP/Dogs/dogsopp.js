"use strict";

// class called Dog

class Dog {
    constructor(name, species, size) {
        this.name = name;
        this.species = species;
        this.size = size;
    }
    //if dog is bigger than 60 it barks "Grrr! Grrr!"
    //if less than 60, it barks "Woof! Woof!"
    bark() {
        let bark = "";
        if (this.size < 60) {
             bark = "Woof! Woof!";
            return bark;
        }
        else if (this.size > 60) {
            let bark = "Grrr! Grrr!"
            return bark;
        }
    }
}
const fang = new Dog("Fang", "boarhound", 75);
console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

const snowy = new Dog("Snowy", "terrier", 22);
console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);