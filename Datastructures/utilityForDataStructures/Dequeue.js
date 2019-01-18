/*****************************************************************************************
 *purpose   : Acessing the  methods by through this dequeue claas for pallindrome program

  
 * @file    :Dequeue.js
 * @overview: By this class it will provinding methods for dequeue operation

 * @version : 1.0
 * @since   : 04/01/2019 
 ***************************************************************************/


// class for dequeue
class Dequeue {
    constructor() {
        this.front = -1;
        this.rear = 0;
        this.size = 30;
        this.arr = new Array(30);
    }



    // checking the elements are in  deque or not

    isFull() {
        if ((this.front == 0 && this.rear == this.size - 1) || (this.rear + 1 == this.front)) {
            return true;
        }
        return false;
    }



    // checking the deque is empty or not 
    isEmpty() {
        return this.front == -1;
    }




    // method for adding elements in front in deque
    addFront(item) {
        if (this.isFull()) {
            console.log("Queue overflow");
            return;
        }
        if (this.front == -1) {
            this.front = 0;
            this.rear = 0;
        }
        else if (this.front == 0) {
            this.front = this.arr.length - 1;
        }
        else {
            this.front--;
        }
        this.arr[this.front] = item;
    }
    // method for adding elements in rear in deque
    addRear(item) {
        if (this.isFull()) {
            console.log("Queue overflow");
            return;
        }
        if (this.front == -1) {
            this.front = 0;
            this.rear = 0;
        }
        else if (this.front == this.arr.length - 1) {
            this.rear = 0;
        }
        else {
            this.rear++;
        }
        this.arr[this.rear] = item;
    }


    // method for deleting elements in rear  in deque
    removeRear() {
        if (this.isEmpty()) {
            console.log("Queue underflow");
            return;
        }
        var item;
        if (this.rear == this.front) {
            item = this.arr[this.rear];
            this.rear = -1;
            this.front = -1;
        }
        else if (this.rear == 0) {
            item = this.arr[this.rear];
            this.rear = this.arr.length - 1;
        }
        else {
            item = this.arr[this.rear]
            this.rear = this.rear--;
        }
        return item;
    }


    // method for removing elements in front in deque


    removeFront() {
        if (this.isEmpty()) {
            console.log("Queue underflow");
            return;
        }
        var item;
        if (this.front == this.rear) {
            item = this.arr[this.front];
            this.front = -1;
            this.rear = -1;
        }
        else if (this.front == this.arr.length - 1) {
            item = this.arr[this.front];
            this.front--;
        }
        else {
            item = this.arr[this.front];
            this.front++;
        }
        return item;
    }


    //Gets the front item from queue
    getFront() {
        if (this.isEmpty()) {
            return -1;
        }
        return this.arr[this.front];
    }



    //Gets the rear item from queue
    getRear() {
        if (this.isEmpty()) {
            return -1;
        }
        return this.arr[this.rear];
    }



    // method for pallindrome checker
    PalindromeChecker(str) {
        for (let i = 0; i < str.length; i++)
        // for loop for string 
        {
            this.addRear(str.charAt(i));
            // adding the vales in queue
        }

        while (this.front != this.rear && this.front < this.rear)
        // while loop for tracing the rear and front 
        {

            if (this.getFront() != this.getRear())
            // checking the elements reteriving from front  rear
            {
                return false;
            }
            this.front++;
            // front will incremented in queue
            this.rear--;
            // rear will decremented in queue
        }
        return true;
    }
}
// modules exports for pallindromechecker
module.exports = {
    Dequeue
}