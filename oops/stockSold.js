/*************************************************************************************************
 *  @Purpose        : Here maintain the Stock Symbol Purchased or Sold in a Stack implemented using  
                      Linked List to indicate transactions done. 
 *  @file           : stockSold.js
 *  @overview       : In this we have to buy and sell the item and prints the item purchased timings
                      using Stack implemented using linkedlist
 *  @author         : surendra
 *  @version        : 1.0
 *  @since          : 04-01-2019
 ***************************************************************************************************/

    var read = require('readline-sync');
    /**
     * {}-new object 
     */
    var module = {};
    /**
     * if it already exists use its value else use the new object.
     */
    module.StackNode = function () {
        this.item = null;
        this.next = null;
    }
    module.LinkedStack = function () {
        var head = null;
        var size = null;
        /**
         * Push function:
         * Iterate through the list and then add the node to the last node in the list
         */
        this.pushToStack = function (item) {
            var node = new module.StackNode();
            node.item = item;
            node.next = null;
            if (size < 1 && head === null) {
                head = node;
                head.next = null;
                size = 1;
            }
            else {
                var current = head;
                while (current.next !== null) {
                    current = current.next;
                }
                current.next = node;
                size += 1;
            }
        }
        /**
         * Pop Function:
         * To get the last item and remove it from the list
         */
        this.popFromStack = function () {
            var current = head;
            if (size === 0) {
                return;
            }
            if (size === 1) {
                head = null;
                size = 0;
                return current;
            }
            var prev = current;
            while (current.next !== null) {
                prev = current;
                current = current.next;
            }
            prev.next = null;
            size -= 1;
            console.log(current);
            return current;
        }
        /**
         * Function to check if stack is empty
         */
        this.isStackEmpty = function () {
            return (size < 1) ? true : false;
        }
        /**
         * Function to get top item of the stack
         */
        this.stackTop = function () {
            var current = head;
            if (size > 0 && head !== null) {
                while (current.next !== null) {
                    current = current.next;
                }
                return current.item;
            }
            else {
                console.log("There is no item in the stack");
                return null;
            }
        }
        /**
         * printing stack elements
         */
        this.printStack = function () {
            var current = head;
            while (current.next !== null) {
                //console.log("Item "+current.item + " is on the stack.");
                console.log(current.item);
                current = current.next;
            }
            //console.log("Item "+current.item + " is on the stack.");
            console.log(current.item);
        }
    }

    class Comapany {
        constructor(totalPrice) {
            this.totalPrice = 1;
        }
        /**
         * buy()-adding new object to the json file
         */
        buy(numberOne) {
            for (var i = 0; i < numberOne; i++) {
                /**
                 * asking user to enter the input
                 */
                console.log();
                var name = read.question("Enter of item you want to purchase : ");
                var number = read.question("Enter the number of items you want to purchase: ");
                var price = read.question("Enter the price of item you want to purchase :  ");
                /**
                 * customer is object
                 */
                var customer =
                {
                    name: name,
                    number: number,
                    price: price
                }
                stack.pushToStack(customer);
                totalPrice = parseInt(number) * parseInt(price);
                console.log("The total cost of " + name + " is :" + totalPrice);
                /**
                 * from Date()function getting hrs,min,sec
                 */
                var date = new Date();
                var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
                console.log("The purchase time is " + time);
            }
        }
        /**
         * sell()-subtracting object from the json
         */
        sell() {
            var numberTwo = read.question("\nEnter number of elements you want to sell: ");
            for (var j = 0; j < numberTwo; j++) {
                stack.popFromStack();
            }
            var date = new Date();
            var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
            console.log("The item is sold at " + time);
        }
        accountReport() {
            console.log('The total items purchased are :');
            stack.printStack();
        }
    }

    var read = require('readline-sync');
    var stack = new module.LinkedStack();
    var c = new Comapany();
    var totalPrice = 1;
    var numberThree = read.question(" enter the total number of stocks you want to purchased: ");
    c.buy(numberThree);
    c.accountReport();
    c.sell();