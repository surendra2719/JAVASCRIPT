
class Stack {
    constructor() {
        this.stack = [];
        this.size = 0;
        this.capacity;
        this.top = -1;
    }
    stack(capacity) {
        this.capacity = capacity;
        var stack = new stack[capacity];
    }
    push(element) {

        if (this.top == this.capacity - 1) {
            console.log("Stack Overflow");
            return;
        }
        this.size++;
        this.stack[++this.top] = element;

    }
    pop() {
        if (this.top == -1) {
            console.log("Stack underFlow");
            return;
        }
        this.size--;
        return this.stack[this.top--];
    }
    peek() {
        if (this.top == -1) {
            console.log("No elements Found");
            return;
        }
        console.log(this.stack[this.top]);
    }
    getSize() {
        return this.size;
    }

    isEmpty() {
        if (this.top == -1) {
            console.log("Stack is empty");
            return;
        }
        console.log("Stack is not empty");
    }

    dispaly() {
        var string = "";
        for (let i = 0; i <= this.top; i++) {
            string = string + this.stack[i];
            if (i < this.top) {
                string = string + ",";
            }
        }
        console.log(string);
    }
    reveseStack(stack) {
        var newstack = new Stack;
        var n = this.getsize();
        for (let index = 0; index < n; index++) {
            new stack.push(this.pop());
        }
        return newstack;

    }


}

module.exports = {
    Stack
}