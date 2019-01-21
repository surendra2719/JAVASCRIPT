/*****************************************************************************************
 *purpose   : it wiil providing method accessing for prime angaram  program through linked list 
 * @file    : PrimeAnag.js
 * @overview: Reading methods for prime anagram through linked lilst 
 * @author  : surendra 
 * @version : 1.0
 * @since   : 04/01/2019 
 ***************************************************************************/
var utility = require('../Datastructures/Utilityforprogram');
// accessing  Anagram utility through require keyword
var stack = require('../Datastructures/stack')
//  accessing the stack 
var req = require('util');
// accessing prime utility class through require keyword
module.exports = {
    // modules exporting for prime twod  
    primeAnag() {  // modules exporting for primeangram 
        var arr = [];  // declaring an empty array
        var array = [["[0-1000] "]]; // declaring an array with range of values
        for (let i = 2; i < 1000; i++) // generating for loop for iterating upto 1000 numbers for prime numbers
        {
            if (utility.isPrime(i)) // checking that generating prime with isprime method through if condition
            {
                arr.push(i); // pushing an elemetnts into array
            }
        }
        var range = 1000,    // declaring intially 100
        var k = 0;// declaring k varaible
        for (let i = 0; i < arr.length; i++) // loops for printing the generated prime numbers in two dimensional array
        {
            for (let j = i + 1; j < arr.length; j++) {
                if (utility.isAnagram(arr[i], arr[j])) // checking that generating prime with isZAnagram method through if condition
                {
                    if (arr[i] <= range)  // checking that prime numbers with range through if condition

                    {
                        if (arr[j] <= range) {
                            array[k].push(arr[i]);  // pushing  that generated elements in array
                            array[k].push(arr[j]);
                        }
                    }
                    else {
                        k++;// k vraible will incremented
                        if (arr[j] <= range)   // checking that prime numbers with range through if condition                  
                        {
                            array[k].push(arr[i]);// pushing the elements into array
                            array[k].push(arr[j]);
                        }
                    }
                }

            }
        }
        console.log("The Number which are prime and anagram ");
        for (let i = 0; i < array.length; i++)// loops for printing for that generated elements 
        {
            for (let j = 0; j < array[i].length; j++) {
                req.print(array[i][j] + " ");
                if (j == 0) {
                    req.print(" ");
                } else {
                    if (j != array[i].length)
                        req.print(",")
                }
            }
            console.log();
        }
        console.log('\n');
    }

}