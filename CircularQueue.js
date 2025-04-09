class CircularQueue {
  constructor(capacity = 5) {
    this.capacity = capacity;
    this.items = [];
    this.frontIndex = -1;
    this.rearIndex = -1;
    this.length = 0;
  }

  enqueue(value) {
    if ((this.rearIndex + 1) % this.capacity == this.frontIndex) {
      console.log("Queue is full");
      return;
    }

    this.rearIndex = (this.rearIndex + 1) % this.capacity;
    this.items[this.rearIndex] = value;
    if (this.frontIndex == -1) this.frontIndex = 0;
    this.length++;
  }

  dequeue() {
    if (this.rearIndex == -1) {
      console.log("Queue is empty");
      this.items = []
      return;
    }
    if (this.frontIndex == this.rearIndex) {
      this.frontIndex = -1;
      this.rearIndex = -1;
    } else {
      this.frontIndex = (this.frontIndex + 1) % this.capacity;
    }
    this.length--;
  }

  peek() {
    if(this.frontIndex == -1){
      console.log("Queue is empty")
      this.items = []
      return
    }
    console.log("Peek : ",this.items[this.frontIndex])
  }

  print() {
    console.log(this.items);
  }
}

const cq = new CircularQueue();

cq.enqueue(1);
cq.enqueue(2);
cq.enqueue(3);
cq.enqueue(4);
cq.enqueue(5);
cq.enqueue(6);

cq.print();
cq.peek();

cq.dequeue();
cq.dequeue();

cq.peek();

cq.enqueue(8);
cq.enqueue(9);
cq.print();
cq.peek();
cq.dequeue();
cq.dequeue();
cq.dequeue();
cq.peek();
cq.dequeue();
cq.peek();
cq.dequeue();
cq.peek();
cq.print();
