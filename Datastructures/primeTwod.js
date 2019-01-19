/*****************************************************************************************
 *purpose   : Take a range of 0 - 1000 Numbers and find the Prime numbers in that range. 
              Store the prime numbers in a 2D Array

 
 * @file    :primeTwod.js
 * @overview: prime numbers in a 2D Array, the first dimension represents the range 0-100, 100-200...
              While the second dimension represents the prime numbers in that range
 
 * @version : 1.0
 * @since   : 04/01/2019 
 ***************************************************************************/
var access = require('./utilityForDataStructures/primeTwodChecker')//accessing the primetwodchecker through require keyword

function prime()// method for prime

{

    access.primeNumber2D(); //  accessing primenumber2d method 
}
prime();