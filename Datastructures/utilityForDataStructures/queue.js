
/*****************************************************************************************
 *purpose   : Acessing the  methods by through this queue claas for balanced paranthesis program

  
 * @file    : queue.js
 * @overview: By this class it will provinding methods for queue operation

 * @version : 1.0
 * @since   : 04/01/2019 
 ***************************************************************************/





class Queue {
    // class for queue
    constructor() {
        this.front = -1;
        this.rear = -1;
        this.items = [];
        this.Size = 0;
    }




    // class for my queue

    MyQueue(capacity) {
        this.capacity = capacity;
        var items = new items(capacity);
    }




    // method for adding elements in queue
    enque(ele) {
        if (this.rear == this.capacity - 1) {
            console.log("Queue is full");
            return;
        }
        if (this.front == -1) {
            this.front++;



        }
        this.items[++this.rear] = ele;
        this.Size++;
    }




    // method for deleting elements in queue
    deque() {
        if (this.front == -1) {
            console.log("Queue is empty");
            return null;
        }
        var ele = this.items[this.front++];
        this.Size--;
        if (this.front > this.rear) {
            this.front = this.rear = -1;
        }
        return ele;
    }




    // method for displaying elements in queue
    show() {
        var res = "";
        for (var i = this.front; i <= this.rear; i++) {
            var res = res + this.items[i];
            if (i < this.rear) {
                res = res + ",";
            }

        }
        return res;

    }



    // method for checking queue is empty or not
    isEmpty() {
        if (this.Size > 0) {
            return true;
        }
        return false;
    }



}
// exporting modules for queue class
module.exports = {
    Queue
}