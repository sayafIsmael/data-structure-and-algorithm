class Stack {
    constructor(){
        this.items = {}
        this.top = 0
    }

    isEmpty(){
        return this.top === 0
    }

    push(item){
        this.items[this.top] = item
        this.top++
    }

    pop(){
        if(this.isEmpty()){
            console.log("Stack is empty!")
            return
        }

        this.top--
        const popedItem = this.items[this.top]
        delete this.items[this.top]
        return popedItem
    }

    peek(){
        if(this.isEmpty()){
            console.log("Stack is empty!")
            return
        }

        return this.items[this.top-1]
    }

    size(){
        return this.top
    }

    printStack(){
        let results = ''
        for(let i=0; i < this.top; i++){
            results += this.items[i] + ' => '
        }
        console.log(results)
    }
}

const newStack = new Stack()

console.log("Is empty stack: " + newStack.isEmpty())

newStack.push(10)
newStack.push(20)
newStack.push(30)
newStack.push(40)

newStack.pop()
newStack.printStack()

console.log("Is empty stack: " + newStack.isEmpty())
console.log("Stack first item: ", newStack.peek())