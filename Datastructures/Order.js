var access = require('../Datastructures/linkedlist');
var filestream = require('fs');
var readline = require('readline-sync');
var utilorder = require('../Datastructures/utilorder');

function ordered() {

    var string = filestream.readFileSync('text1.txt', 'utf8');
    var arr = string.split(' ');
    console.log(arr);

    var ord = new access.linkedlist;
    for (let i = 0; i < arr.length; i++) {
        ord.add(Number(arr[i]));
    }

    ord.addAscending();
    ord.show();

    var answer = readline.question("Enter the number do you want to search ");
    if (!Number(answer)) {

        if (ord.search(answer)) {
            ord.Remove(answer);
        }
        else {
            ord.add(answer);
            ord.addAscending();
        }
    }

    ord.show();
    var num = ord.getData();
    utilorder.writeFile('text1.txt', num);
    console.log("The linked list elements are ");
    ord.show();
}

ordered();
