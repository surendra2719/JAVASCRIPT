/*****************************************************************************************
 *purpose   : Take a range of 0 - 1000 Numbers and find the Prime numbers in that range. 
              Store the prime numbers in a 2D Array

 
 * @file    : Primetwod.js
 * @overview: prime numbers in a 2D Array, the first dimension represents the range 0-100, 100-200...
              While the second dimension represents the prime numbers in that range
 
 * @version : 1.0
 * @since   : 04/01/2019 
 ***************************************************************************/
var access=require('../Datastructures/Primetwodchecker')
//accessing the primetwodchecker through require keyword
 

// method for prime

function prime()
{
    //  accessing primenumber2d method 
    access.PrimeNumber2D();
}
prime();