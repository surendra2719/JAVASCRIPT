
/*****************************************************************************************
 *purpose   : Acessing the  methods by through this stack claas for balanced paranthesis program

 
 * @file    : stack.js
 * @overview: By this class it will provinding methods for stack operation

 * @version : 1.0
 * @since   : 04/01/2019 
 ***************************************************************************/
class Stack {
    constructor() {
        this.stk = [];
        this.size = 0;
        this.capacity;
        this.top = -1;
    }
    stack(capacity) {
        this.capacity = capacity;
        var stk = new stk[capacity];
    }
    push(ele) {// method for adding 

        if (this.top == this.capacity - 1) {
            console.log("Stack Overflow");
            return;
        }
        this.size++;
        this.stk[++this.top] = ele;

    }
    pop() {// method for deleting
        if (this.top == -1) {
            console.log("Stack underFlow");
            return;
        }
        this.size--;
        return this.stk[this.top--];
    }
    peek() {// meth
        if (this.top == -1) {
            console.log("No elements Found");
            return;
        }
        console.log(this.stk[this.top]);
    }
    getSize() {// method for reteriving size
        return this.size;
    }

    isEmpty() {// method for checking stack is empty or not
        if (this.top == -1) {
            console.log("Stack is empty");
            return;
        }
        console.log("Stack is not empty");
    }

    dispaly() { // method for dispalying elements 
        var string = "";
        for (let i = 0; i <= this.top; i++) {
            string = string + this.stk[i];
            if (i < this.top) {
                string = string + ",";
            }
        }
        console.log(string);
    }
    reveseStack(stk) {//method for reversing stack
        var newstack = new Stack;
        var n = this.getsize();
        for (let index = 0; index < n; index++) {
            newstack.push(this.pop());
        }
        return newstack;

    }


}

module.exports = {
    Stack
}