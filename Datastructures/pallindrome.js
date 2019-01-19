/*****************************************************************************************
 *purpose   :   A palindrome is a string that reads the same forward and backward, for example, radar, toot, and madam. 
                 We would like to construct an algorithm to input a string of characters and 
                 check whether it is a palindrome.
                 Take a String as an Input 
 * @file    :   pallindrome.js
 * @overview:     The solution to this problem will use a deque to store the characters of the string. 
 *                   We will process the string from left to right and add each character to the rear of the deque
 * @author  : surendra 
 * @version : 1.0
 * @since   : 04/01/2019 
 ***************************************************************************/
var access = require('../Datastructures/utilityForDataStructures/dequeue');// accessing  a dequeue class through require keyword 
var readline = require('readline-sync');// accessing  a radline through require keyword 
function check()// method for pallindrom checking
{
    var take = new access.Dequeue; // accessing dequeue 
    var string = readline.question("Enter the string  ");// taking user input string
    if (!isNaN(string))// checking the input value as a string irrespective of integers
    {
        console.log("input should be in string form ");
        return;
    }
    else {
        var result = take.palindromeChecker(string);// by pallindromechecker method we check the pallindrome string it is class present in dequeue

        if (result == false) {
            console.log("String is not an a Palindrome ");// checking with if condition that result which we get from pallindromechecker method 
        }
        else {
            console.log("String is palindrome  ");

        }
 }
}
check();