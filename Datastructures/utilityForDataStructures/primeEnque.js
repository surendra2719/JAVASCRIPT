/*****************************************************************************************
 *purpose   : it wiil providing method accessing for primetwod program
 * @file    : primeEnque.js
 * @overview: Reading methods for primetwod
 * @author  : surendra 
 * @version : 1.0
 * @since   : 04/01/2019 
 ***************************************************************************/
var req = require('util');
// accessing utility 
var utility = require('../utilityForDataStructures/Primeutility');
module.exports = {
    primeNumberQueue()
    // method for primequeue
    {
        var array = [["0-1000 "], ["100-200  "], ["200-300 "], ["300-400 "], ["400-500 "], ["500-600 "], ["600-700 "], ["700-800 "], ["800-900 "], ["900-1000 "]];
        // varaible declaration
        var i = 0; var j = 1; var range = 100;        // varaible declaration
        for (let prime = 2; prime <= 1000; prime++)   // generating loop for prime   
        {
            if (utility.isPrime(prime))  //  checking with isPrime method through if condition 
            {
                if (prime <= range) //checking range that generated prime through if condition 
                {
                    array[i][j] = prime;  // assinging that generated varaibles into array
                    j++;

                }
                else {
                    j = 1;
                    range = range + 100;
                    i++;
                    array[i][j] = prime;
                }
            }
        }
        console.log("The prime numbers are presents in the given range ");//loops for printing 
        for (var i = 0; i < array.length; i++) {
            for (var j = 0; j < array[i].length; j++) {
                req.print(array[i][j] + " ");// printed elements present in array
            }
            console.log();
        }
        console.log();
    }
}