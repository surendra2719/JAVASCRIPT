/*****************************************************************************************
 *purpose   : Read from file the list of Words and take user input to search a Text


 
 * @file    : Unorder.js
 * @overview: read the Text from a file, split it into words and arrange it as Linked List. 
 *            Take a user input to search a Word in the List. If the Word is not found then add it to the list, and 
 *            if it found then remove the word from the List. In the end save the list into a file
 *                 
 * @author  : surendra 
 * @version : 1.0
 * @since   : 04/01/2019 
 ***************************************************************************/
var access = require('../Datastructures/utilityForDataStructures/Linkedlist');// accessing  a linkedlist class through require keyword 


var filestream = require('fs');// picking a file through require keyword 


var readline = require('readline-sync');// accessing a readline through require keyword 


var Util = require('../Datastructures/Util');// accessing a util class through require  keyword 

function unOrderlist() {
    var string = filestream.readFileSync('text.txt', 'utf8'); // reading file from folder we created


    var array = string.split(' ');// spilting the given string

    var unorder = new access.linkedlist; // acesseing the linkedlist class file

    for (let i = 0; i < array.length; i++) {
        unorder.add(array[i]); // adding an elements in array
    }


    unorder.show(); // for displaying that array we have given data

    var answer = readline.question("Enter the word  you want to search  :\n");// checking the string what you want to search

    if (!isNaN(answer)) {
        console.log("input should be in string form ");  // checking the input value as a string irrespective of integers
        return;
    }
    else {
        if (unorder.search(answer))   //calling  elements by search method present in linkedlist class

        {
            unorder.remove(answer); //removing element wht you are repeated that element presnt in string 

        }
        else //condition for if you enterd new string element were not presnt in thst folder
        {
            unorder.add(answer);
            //it will added in the entire string 
        }

    }
    var string = unorder.getData();  // it will getting data throuh getdata method containing in linkedlist class
    Util.writeFile('text.txt', string);  // it will acessing the writefile in the util class
    console.log("Linked list elements are ");
    unorder.show(); //it will display the data after performing all methods

}


unOrderlist();