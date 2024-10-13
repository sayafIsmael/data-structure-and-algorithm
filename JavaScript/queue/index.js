class Queue {
    constructor(){
        this.items = {}
        this.top = 0
        this.first = 0
    }

    isEmpty(){
        return this.top === 0
    }

    enQueue(item){
        this.items[this.top] = item
        this.top++
    }

    deQueue(){
        if(this.isEmpty()){
            console.log("Stack is empty!")
            return
        }

        const popedItem = this.items[this.first]
        delete this.items[this.first]
        this.first++
        return popedItem
    }

    peek(){
        if(this.isEmpty()){
            console.log("Stack is empty!")
            return
        }

        return this.items[this.first]
    }

    size(){
        return this.top - this.first
    }

    printQueue(){
        let results = ''
        for(let i=this.first; i < this.top; i++){
            results += this.items[i] + ' => '
        }
        console.log(results)
    }
}

const newQueue = new Queue()

console.log("Is empty queue: " + newQueue.isEmpty())

newQueue.enQueue(5)
newQueue.enQueue(20)
newQueue.enQueue(30)
newQueue.enQueue(40)

newQueue.printQueue()
console.log("Dequeue item: ",newQueue.deQueue())
newQueue.printQueue()

console.log("Is empty queue: " + newQueue.isEmpty())
console.log("Queue first item: ", newQueue.peek())
console.log("Queue size: ", newQueue.size())