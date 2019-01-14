var access = require('../Datastructures/linkedlist');
var filestream = require('fs');
var readline = require('readline-sync');
var Util = require('../Datastructures/Util');

function unorderlist() {
    var string = filestream.readFileSync('unorder.txt', 'utf8');
    var a = string.split(' ');

    var unorder = new access.linkedlist;
    for (let i = 0; i < a.length; i++)
     {
        unorder.add(a[i]);
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

   
    var s = unorder.getData();
    Util.writeFile('unorder.txt', s);
    console.log("Linked list elements are ");
    unorder.show();
}

unorderlist();