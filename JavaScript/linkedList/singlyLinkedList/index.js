class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    insert(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode
        } else {
            let current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = newNode
        }
        this.size++
    }

    print() {
        if (!this.head) {
            console.log("The list is empty!")
            return
        }

        let results = ''
        let current = this.head
        while (current) {
            results += `${current.value} => `
            current = current.next
        }

        results += ' null'
        console.log(results)
        console.log(this.size)
    }

    delete(value){
        if (!this.head) {
            console.log("List is empty");
            return;
        }

        if(this.head.value === value){
            this.head.value = this.head.next
            this.size--
            return
        }

        let current = this.head
        let prev = null

        while(current && current.value !== value){
            prev = current
            current = current.next
        }

        if(!current){
            console.log("Node not found!")
            return
        }

        prev.next = current.next
        this.size--
    }

    search(value){
        if (!this.head) {
            console.log("List is empty");
            return;
        }
        let current = this.head
        while(current){
            if(current.value === value){
                console.log(`Item found: ${current.value}`)
                return
            }
            current = current.next
        }
        return
    }
}

/**
 * Next, I can show you:
    Doubly Linked Lists or
    More advanced operations like reversing the list or finding the middle.
 */

const list = new SinglyLinkedList()
list.print()
list.insert(5)
list.insert(15)
list.insert(25)
list.insert(30)
list.print()

list.delete(15)
list.print()
list.search(30)

