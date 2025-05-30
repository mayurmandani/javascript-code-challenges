/* Circular Queue Data Structures */

class CircularQueue {
   constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.currentLength = 0;
    this.rear = -1;
    this.front = -1;
   }

   isFull() {
    return this.currentLength === this.capacity;
   }

   isEmpty() {
    return this.currentLength === 0;
   }

   enqueue(element) {
    if(!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = element;
      this.currentLength += 1;
      if(this.front === -1) {
        this.front = this.rear
      }
    }
   }

   dequeue() {
    if(this.isEmpty()) {
      return null
    }
    const item = this.items[this.front];
    this.items[this.front] = null
    this.front = (this.front + 1) % this.capacity;
    this.currentLength -= 1;
    if(this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }
    return item
   }

   peek() {
    if(!this.isEmpty()) {
      return this.items[this.front];
    }
    return null;
   }

   print() {
    if(this.isEmpty()) {
      console.log('Queue is Empty')
    } else {
      let i;
      let str = '';
      for(i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
        str += this.items[i] + " ";
      }
      str += this.items[i];
      console.log(str)
    }
   }
}

const queue = new CircularQueue(5)

console.log(queue.isEmpty()) // true

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)

console.log(queue.isFull()) // true
queue.print()  // 10 20 30 40 50

console.log(queue.dequeue()) // 10

console.log(queue.peek()); // 20

queue.print(); // 20 30 40 50

queue.enqueue(60);

queue.print(); // 20 30 40 50 60