// Keeps track od the next nodes

class Linked {
    constructor() {
        this.head = null;
    }

    addFirst(node) {
        node.next = this.head;
        this.head = node;
    }
    addLast(node) {
        if (!this.head) {
            this.head = node;
            return;
        }

        let ref = this.head;
        while (ref.next) ref = ref.next;
        ref.next = node;
    }
    indexOf(node) {
        let pos = 0;
        let hold = this.head;

        while (true) {
            if (hold === node) {
                return pos;
            }
            hold = hold.next;
            pos++;
        }
    }

    removeAt(num) {
        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        let idx = 0;
        let node = this.head;

        while(idx < (index - 1)) {
            node = node.next;
            idx++;
        }

        node.next = node.next.next;
    }
}