class CircularQueue {
    constructor(capacity = 5) {
        this.capacity = capacity;
        this.items = [];
        this.frontIndex = -1
        this.rearIndex = -1
        this.length
    }

    enqueue(value) {
        if ((this.rearIndex + 1) % this.capacity == this.frontIndex) {
            console.log("Queue is full")
            return
        }

        this.rearIndex = (this.rearIndex + 1) % this.capacity
        this.items[this.rearIndex] = value
        if (this.frontIndex == -1) this.frontIndex = 0
        this.length++
    }

    dequeue(){
        if (this.rearIndex == -1) {
            console.log("Queue is empty")
            return
        }
        
        if(this.frontIndex == this.rearIndex){
            this.frontIndex = -1
            this.rearIndex = -1
        }else{
            this.frontIndex = (this.frontIndex + 1) + this.capacity
        }
    }
}
