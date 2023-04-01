"use strict";

class Account {
    constructor(name) {
        this.name = name;
        this.balance = 0;
    }
    credit(holder) {
        holder.balance += 1000;
        this.balance += 1000;
    }
    describe() {
        return `owner: ${this.name}, balance: ${this.balance}`;
    }
}
let sean = new Account("Sean");
let brad = new Account("Brad");
let georges = new Account("Georges");

console.log(sean.describe());
console.log(brad.describe());
console.log(georges.describe());
// holding all accounts in an array
