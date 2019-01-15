var access = require('./orderedlinkedlist');
var filestream = require('fs');
var readline = require('readline-sync');
var Util = require('../Datastructures/Util');
function orderList() {
    var string = filestream.readFileSync('file.txt', 'utf8');
    var array = string.split(' ');
    console.log(array);

    var order = new access.linkedList;
    for (let i = 0; i < array.length; i++)
     {
        order.add(Number(array[i]));
    }
    
    var answer = readline.question("Enter the number you want to search  :");
    if (!isNaN(answer))
     {
       
        if (order.search(answer))
         {
            order.Remove(answer);
        }
        else 
        {
            order.add(answer);
            order.addAscending();
        }
    }
    var number = order.getData();
    Util.writeFile('file.txt', number);
    console.log("Linked list elements are ");
    order.show();
    }
orderList();