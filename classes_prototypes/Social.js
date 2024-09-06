// JS classes uses a constructor() method
class Social {
    constructor() {
        this.battery = 50;
    }
}
const f1 = new Social();
console.log(f1.battery);
// the extends keyword allows subclasses to be created
// the super keyword lets the subclass use the constructor
// of the parent class