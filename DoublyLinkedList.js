class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null; // New tail reference
        this.size = 0;
    }

    addAtFirst(data) {
        const node = new Node(data);
        if (this.head == null) {
            this.head = node;
            this.tail = node; // If it's the first element, head and tail are the same
            return;
        }

        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }

    addAtLast(data) {
        const node = new Node(data);
        if (this.head == null) {
            this.head = node;
            this.tail = node; // If it's the first element, head and tail are the same
            return;
        }

        // Traverse to the last node
        let current = this.tail;
        current.next = node;
        node.prev = current;
        this.tail = node; // Update the tail reference
    }

    printForward() {
        if (this.head == null) {
            console.log("List is empty");
            return;
        }

        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

    printBackward() {
        if (this.tail == null) {
            console.log("List is empty");
            return;
        }

        let current = this.tail;
        while (current) {
            console.log(current.data);
            current = current.prev;
        }
    }
}

const dl = new DoublyLinkedList();

dl.addAtLast(30);
dl.addAtLast(20);
dl.addAtLast(10);
dl.addAtLast(40);

console.log("Forward Traversal:");
dl.printForward();

console.log("Backward Traversal:");
dl.printBackward();
