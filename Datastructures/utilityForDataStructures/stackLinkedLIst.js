/*****************************************************************************************
 *purpose   : it wiil giving methods to perform stacklinkelist methods

 
 * @file    :stackLinkedLIst.js
 * @overview: Reading methods for unorderedlinkedlist file
 * @author  : surendra 
 * @version : 1.0
 * @since   : 04/01/2019 
 ***************************************************************************/

//node class for stack linked list
class Node {

    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

//seperate class for stackedlinked list
class StackLinkedList {
    constructor() {
        this.size = 0;
        this.head = null;
    }




    // method for adding elements in stack
    push(element) {
        var n = new Node(element);
        if (this.head == null) {
            this.head = n;
            this.size++;
            return;
        } else {
            var current = this.head;
            while (current.next) {
                current = current.next;
            }
            this.size++;
            current.next = n;
        }


    }


    // method for removing elements from stack
    pop() {
        if (this.head == null) {
            console.log("Stack underflow");
            return null;
        }
        var curr = this.head;
        var pre = this.head;
        if (curr.next == null) {
            this.head = null;
            return curr.element;
        }
        while (curr.next != null) {
            pre = curr;
            curr = curr.next;

        }
        pre.next = null;
        this.size--;
        return curr.element;
    }


    // method for retreving elements in stack
    peek() {
        if (this.head == null) {
            console.log("Stack underflow");
            return null;
        }
        var curr = this.head;
        while (curr.next != null) {
            curr = curr.next;

        }
        return curr.element;
    }


    // method for checking whether elements is present or not
    isEmpty() {
        if (this.size == 0) {
            return true;
        }
        return false;
    }


    // method for returs the size of stack
    give_size() {
        return this.size;
    }



    // method for dispaying an elements in stack
    display() {
        var curr = this.head;
        var str = "";
        while (curr) {
            str = str + curr.element;
            if (curr.next != null) {
                str = str + ",";
            }
            curr = curr.next;
        }
        console.log(str);
    }



    // method for revers an elements present in stack
    reveseStack(stk) {
        var newstack = new StackLinkedList;
        var n = this.give_size();
        for (let index = 0; index < n; index++) {
            newstack.push(this.pop());
        }
        return newstack;

    }



    // method for displaying an anagram elements in stack

    displayAnagram() {
        var curr = this.head;
        var dis = require('util');
        while (curr) {
            dis.print(curr.element);
            if (curr.next != null) {
                dis.print("  ");
            }
            curr = curr.next;
        }

    }


}



// modules exporting
module.exports = {
    StackLinkedList
}