
/*****************************************************************************************
 *purpose   : Acessing the  methods by through this stack claas for balanced paranthesis program

 
 * @file    : Balancedpranthesis .js
 * @overview: By this class it will provinding methods for stack operation

 * @version : 1.0
 * @since   : 04/01/2019 
 ***************************************************************************/





 
// class for stack
class Stack {
    constructor() {
        this.stack = [];
        this.size = 0;
        this.capacity;
        this.top = -1;
    }
// declaring capacity to stack
    stack(capacity) 
    {
        this.capacity = capacity;
        var stack = new stack[capacity];
    }




    


 // methods contains pushing an elements to stack
    push(element) 
    {

        if (this.top == this.capacity - 1)
         {
            console.log("Stack Overflow");
            return;
        }
        this.size++;
        this.stack[++this.top] = element;

    }


 // methods contains poping an elements to stack

    pop() {
        if (this.top == -1)
         {
            console.log("Stack underFlow");
            return;
        }
        this.size--;
        return this.stack[this.top--];
    }









     // methods displaing an top element in stack
    peek() {
        if (this.top == -1) 
        {
            console.log("No elements Found");
            return;
        }
        console.log(this.stack[this.top]);
    }






    // method for  returning the size of stack
    getSize() 
    {
        return this.size;
    }





    // checking the elments are present or not
    isEmpty() 
    {
        if (this.top == -1)
         {
            console.log("Stack is empty");
            return;
        }
        console.log("Stack is not empty");
    }








     // methods contains displaying an elements in stack

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


    // method for reversing stack
    reveseStack(stack) 
    {
        var newstack = new Stack;
        var n = this.getsize();
        for (let index = 0; index < n; index++) 
        {
            new stack.push(this.pop());
        }
        return newstack;

    }


}






module.exports =
{
    Stack
}