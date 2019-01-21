/*****************************************************************************************
 *purpose   :   Create a Slot of 10 to store Chain of Numbers that belong to each Slot to efficiently 
                search a number from a given set of number
                read a set of numbers from a file and take user input to search a number
*  @filename : hashingMethod.js
 * @overview:  Firstly store the numbers in the Slot. Since there are 10 Numbers divide each number by 11 and the reminder put in the appropriate slot. 
               Create a Chain for each Slot to avoid Collision. If a number searched is found then pop it or else push it.

 * @author  : surendra 
 * @version : 1.0
 * @since   : 04/01/2019 
 ***************************************************************************/
var access = require('../Datastructures/utilityForDataStructures/linkedList');//  accessing linkedlist through require keyword 
var readline = require('readline-sync');//  accessing readline through require keyword
var take = require('util');// printing take varaible through require keyword 
var filestream = require('fs');// accessing file through require keyword 
var utility = require('../Datastructures/utilityForDataStructures/util');// accessing util class through require keyword 
function hashing() // method for hashin
{

    var f = filestream.readFileSync('hashnumber.txt', 'utf8');// accessing file through require keyword 
    var num = f.split(' ');//  elements in file were spilted
    var arr = new Array(10); // declaring arr varaible 
    var remainder;   // declaring remainder varaible 
    var n;  // declaring n varaible 

    for (let i = 0; i < num.length; i++)  // loop for generating number given by user input
    {
        n = Number(num[i]);  // assigning that number to n 
        remainder = n % 10;// checking remainder

        if (arr[remainder] === undefined)   // checking  remainder with undefined through if condition 
        {
            arr[remainder] = new access.linkedList; //acessing that remainder to linkedlist

            arr[remainder].add(n);// generated elements were added to that array 
        } else {
            arr[remainder].add(n);
        }
    }
    var str = "";//  declaring string varaible for generated elements were concated

    for (let index = 0; index < 10; index++) {
        take.print(index + " elements    ");
        try {
            arr[index].show(); // method for displaying elements

        } catch (err) {
            console.log("empty index");
        }
    }
    var number = readline.question(' Enter the number you want to search \n');// user input to what you want to search 
    if (!isNaN(number))// checking that input is number or not 
    {
        remainder = Number(number % 10);
        console.log(remainder);
        console.log(arr[1]);// printing remainder 
        if (arr[remainder] === undefined) {
            arr[remainder] = new access.linkedlist;
        }
        //  checking that you entered to search an integer  present or not through  search method  nby if condition 
        if (arr[remainder].search(Number(number))) {
            console.log("The number is found in file");
            arr[remainder].remove(number); // if number you entered is there it will deleted through remove method

        } else {
            console.log("Number is not found in file");
            arr[remainder].add(number);
            // checking with conidition if number is not there it will inserted through add method 
        }
        var flag;
        for (let index = 0; index < 10; index++) {
            flag = true;
            take.print(index + " result elements ,   ");  // print that generated elements in present      
            try
            // 
            {
                arr[index].show();
                str = str + arr[index].getData();
                if (arr[index] !== 'undefined' && index < arr.length - 2) {
                    str = str + " ";
                }
            } catch (err) {
                // if array of index is not equal it will cocated and not satisfying that cndtn it will displat empty index
                console.log("Empty index");
            }

        } console.log(str);  // print that generated string 

        utility.writeFile('hashingNumber.txt', str); //  accessing the elements 

        console.log("\n\n");
    } else {
        console.log("Wrong input ");
    }

}
hashing()