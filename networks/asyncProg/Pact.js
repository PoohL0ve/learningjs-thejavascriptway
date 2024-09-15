/**
 * Creating a Promise class
 */

const STATUS = {
    PENDING: 0,
    RESOLVED: 1,
    REJECTED: 2
}

class Pact {
// add methods to return on the instance
constructor(ex) {
    // Store calls
    this.handleThis = [];
    this.solveThis = [];
    this.status = STATUS.PENDING;

    this.res = (value) => {
        this.getValue = value;
        this.status = STATUS.RESOLVED;
        this.solveThis.forEach((ex) => {
            ex(value);
        })
    };
    this.rej = (value) => {
        this.showRej = value;
        this.status = STATUS.REJECTED;
        this.handleThis.forEach((ex) => {
            ex(value);
        })
    };
    ex(this.res, this.rej);
}

catch(errVal) {
    if (this.status === STATUS.REJECTED) {
        errVal(this.showRej);
    }
    else if (this.status === STATUS.PENDING) {
        this.handleThis.push(errVal);
    }
    
}

then(runThis) {
    if (this.status === STATUS.RESOLVED) {
        runThis(this.getValue);
    }
    else if (this.status === STATUS.PENDING) {
        return new Pact((res, rej) => {
            this.solveThis.push((value) => {
                if (value instanceof Pact) {
                    value.then((value) => {
                        res(runThis(value))
                    })
                } else {
                    res(runThis(value));
                }
            })
        })
        
    }
    
}
}
