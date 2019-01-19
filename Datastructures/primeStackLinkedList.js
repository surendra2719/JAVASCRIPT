/*****************************************************************************************
 *purpose   : Print the Anagrams in the Reverse Order. Note no Collection Library can be used.


 
 * @file    :primeStackLinkedList.js
 * @overview: Add the Prime Numbers that are Anagram in the Range of 0 - 1000 in a Stack using the Linked List 
              and Print the Anagrams in the Reverse Order
 * @version : 1.0
 * @since   : 04/01/2019 
 ***************************************************************************/
var utility = require('../Datastructures/utilityForDataStructures/utilityForProgram');// accessing the utility class  from utilityforprogram through require keyword
var access = require('../Datastructures/utilityForDataStructures/stackLinkedLIst');// accessing the stacked linked list through require keyword
var take = require('util');// accessing for printing through take varaible
function reverseAnagram()// method for reverse anagram
{
    var array = []; // declaring an empty array varaible
    for (let i = 0; i < 100; i++) // generating for loop for printing prime numbers
    {
        if (utility.isPrime(i)) // checking that generated prime numbers with isPrime method through if condition 
        {
            array.push(i);   // adding that generated elements into  array through pushing method from linked list
        }
    }
    var k = 0;// declarind k varaible
    var stack = new access.StackLinkedList; // accessing the stack linked list
    for (let i = 0; i < array.length; i++) // loop for printing range
    {
        for (let j = 0; j < array.length; j++) // loop for printing generated elements
        {
            if (utility.isAnagram(array[i], array[j]))  // checking that generated elements are anagram or not by isAnagram method from stacklinkedlilst throug if conditioj
            {
                stack.push(array[i]); // pushing that generated elements in array
                stack.push(array[j]);
                k++;
            }
        }
    }
    console.log("the numbers which are prime and anagram");// method for dispalying anagrams
    sactk.displayAnagram();// checking that index value through k varaible and poping that index value from 
    for (let i = 0; i < 2 * k; i++) {
        take.print(stack.pop(i));
    }
    console.log('\n');
}
reverseAnagram();