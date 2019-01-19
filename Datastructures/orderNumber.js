/*****************************************************************************************
 *purpose   :  Read from file the list of Numbers and take user input for a new number
 * @file    :  orderNumber.js
 * @overview:  Read a List of Numbers from a file and arrange it ascending Order in a Linked List. 
               Take user input for a number, if found then pop the number out of the list else insert the 
               number in appropriate position

 * @author  : surendra 
 * @version : 1.0
 * @since   : 04/01/2019 
 ***************************************************************************/
const utility = require('../Datastructures/utilityForDataStructures/util');
const readline = require('readline-sync');
const list = require('../Datastructures/utilityForDataStructures/linkListOrder');
var ordedList = () => {
    var read = utility.readfile1();//accessing file
    console.log("Readfile : " + read);//printing that file
    var st = read.split(' ');// spilting that given string by user
    var list1 = new list.mylinklist;// accessing linked list
    for (var i = 0; i < st.length; i++)// for loop for generating numbers
    {
        list1.add(st[i]);// adding that elements

    }
    var filename = 'file1.txt';//accessing file
    try {
        var search = readline.question("Enter  number you want  to search ");// user have to input 
        if (isNaN(search)) throw "Your input in not a number plz enter String  ";// validation for userinput
        if (search == "") throw "your enter empty element ";// validation for userinput
        if (list1.search(search))//search elements through if condition 
        {

            list1.remove(search);// removing elements 
            var data = list1.getdata();// getting elements
            utility.Writefile(filename, data);//accessing file

            list1.display();//displaying elements 
        }
        else {
            list1.addInSequence2(search);//sorting elements 
            list1.sort();//sorting elements
            var data = list1.getdata();
            utility.Writefile(filename, data);
            list1.display();
        }
    }
    catch (err) {
        console.log("ERROR: " + err);// validation for userinput
    }
}
ordedList();