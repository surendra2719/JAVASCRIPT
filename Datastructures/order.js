/*****************************************************************************************
 *purpose   :  Read from file the list of Numbers and take user input for a new number
 * @file    :  order.js
 * @overview:  Read a List of Numbers from a file and arrange it ascending Order in a Linked List. 
               Take user input for a number, if found then pop the number out of the list else insert the 
               number in appropriate position

 * @author  : surendra 
 * @version : 1.0
 * @since   : 04/01/2019 
 ***************************************************************************/


var access = require('../Datastructures/Linkedlist');


// accessing  a orderedlinkedlist class through require keyword 

var filestream = require('fs');
// picking a file through require keyword 


var readline = require('readline-sync');
// accessing a readline through require keyword 


var Util = require('../Datastructures/Util');
// accessing a util class through require  keyword 


function orderList() {
    var string = filestream.readFileSync('file.txt', 'utf8');
        // reading file from folder we created

    var array = string.split(' ');
    // spilting the given string


    console.log(array);

    var order = new access.linkedlist;
    for (let i = 0; i < array.length; i++)
     {
        order.add(Number(array[i]));
        // adding an elements in array

    }
    
    var answer = readline.question("Enter the number you want to search  :");
   // user input


    if (!isNaN(answer))
        // checking the string what you want to search

     {
       
        if (order.search(answer))
        //  check that entered element should be there or not  through if condition
         {
            order.remove(answer);
                // checking the string what you want to search

        }
        else 
        {
            order.add(answer);

            //condition for if you enterd new string element were not presnt in thst folder 


            //it will added in the entire string 


            order.addAscending();



            // method for sort an entered elements 
        }
    }
    var number = order.getData();

        // it will getting data throuh getdata method containing in linkedlist class

    
    Util.writeFile('file.txt', number);
    console.log("Linked list elements are ");


    order.show();


    //it will display the data after performing all methods



    }
orderList();