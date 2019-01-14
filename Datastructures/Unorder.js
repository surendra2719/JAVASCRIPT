var access = require('../Datastructures/linkedlist');
var filestream = require('fs');
var readline = require('readline-sync');
var Util = require('../Datastructures/Util');

function unorderlist() {
    var string = filestream.readFileSync('unorder.txt', 'utf8');
    var array = string.split(' ');

    var unorder = new access.linkedlist;
    for (let i = 0; i < array.length; i++)
     {
        unorder.add(array[i]);
    }
    unorder.show();

    var answer = readline.question("Enter the word  you want to search  ");
    if (!isNaN(answer)) {
        console.log("input should be in string form ");
        return;
    }
    else 
    {
        if (unorder.search(answer))
         {
            unorder.Remove(answer);
        }
        else 
        {
            unorder.add(answer);
        }
    }

   
    var string = unorder.getData();
    Util.writeFile('unorder.txt', string);
    console.log("Linked list elements are ");
    unorder.show();
}

unorderlist();