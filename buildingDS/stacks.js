/**
 * Stacks operate on the last in, first out basis: LIFO
 */
class Stacks {
    construtor() {
        this.items = [];
    }

    push(item) {
        return this.items.push(item);
    }

    pop() {
        return this.items.pop();
    }

    isEmpty() {
        if (this.items === 0) {
            return true;
        }
        return false;
    }

    peek() {
        return this.items[this.items.length - 1];
    }
}