class Node {
    constructor(value) {
        this.value = value
        this.prev = null
        this.next = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    insert(value) {
        let newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.size++
    }

    printForward() {
        if (!this.head) {
            console.log('The list is empty!')
            return
        }

        let current = this.head
        let results = ''
        while (current) {
            results += current.value + (current.next && ' <=> ')
            current = current.next
        }
        console.log(results)
    }

    printBackward() {
        if (!this.tail) {
            console.log('The list is empty!')
            return
        }

        let current = this.tail
        let results = ''
        while (current) {
            results += current.value + (current.prev && ' <=> ')
            current = current.prev
        }
        console.log(results)
    }

    delete(value) {
        if (!this.head) {
            console.log('The list is empty!')
            return
        }

        if (this.head.value === value) {
            this.head = this.head.next
            if (this.head) {
                this.head.prev = null
            } else {
                this.tail = null
            }
            this.size--
        }

        let current = this.head
        while (current && current.value !== value) {
            current = current.next
        }

        if (!current) {
            console.log("Node not found");
            return;
        }

        if (current === this.head) {
            this.tail = current.prev
            this.tail.next = null
        } else {
            current.prev.next = current.next
            current.next.prev = current.prev
        }
        this.size--
        console.log(`${value} deleted successfully from the list!`)
    }
}

const list = new DoublyLinkedList()

list.insert(5)
list.insert(10)
list.insert(12)
list.insert(23)

list.printForward()
list.printBackward()

list.delete(12)

list.printForward()
list.printBackward()

/**
 * What We've Covered
    Node structure: Contains value, next, and prev pointers.
    Basic operations:
    Insertion at the end.
    Forward and backward traversal.
    Deletion by value.

   What's Next?
    Insertion at specific positions.
    More complex operations like reversing the list.
    Let me know how you’d like to proceed or if you have any questions about the doubly linked list!
 */