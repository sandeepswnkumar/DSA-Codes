class Node{
    constructor(val){
        this.val = val
        this.next = null   
    }
}

class LinkedList{
    constructor(){
        this.head = null
    }

    addFirst(val){
        let newNode = new Node(val)
        if(this.head == null){
            this.head = newNode
            return
        }

        newNode.next = this.head
        this.head = newNode
    }

    addLast(val){
        let newNode = new Node(val)
        if(this.head == null){
            this.head = newNode
            return
        }
        let currentHead = this.head
        while(currentHead.next){
            currentHead = currentHead.next
        }
        currentHead.next = newNode
    }

    print(){
        if(this.head == null){
            console.log("List is empty")
            return
        }
        let currentHead = this.head
        while(currentHead){
            console.log(currentHead.val)
            currentHead = currentHead.next
        }
    }
}


const sl = new LinkedList()

sl.addFirst(1)
sl.addFirst(2)
sl.addFirst(3)
sl.addLast(5)
sl.addLast(6)
sl.print()
