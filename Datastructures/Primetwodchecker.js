/*****************************************************************************************
 *purpose   : it wiil providing method accessing for primetwod program

 
 * @file    : Primetwodchecker.js
 * @overview: Reading methods for primetwod
 * @author  : surendra 
 * @version : 1.0
 * @since   : 04/01/2019 
 ***************************************************************************/



var utility = require('../Datastructures/Primeutility');

// accessing prime utility class through require keyword

var req = require('util');
// accessing for printing through req varaible 

module.exports =
// modules exporting for prime twod  
{


    // method for primetwod
      primeNumber2D() 
    {

        // declaring an array with range of values
        var array = [["[0-100  ], ["], ["[100-200], [ "], ["[200-300], [ "], 
        ["[300-400], [ "], ["[400-500], ["], ["[500-600], ["],
         ["[600-700], ["], ["[700-800], [ "], ["[800-900], ["], ["[900-1000], ["]];


        // declaring i vraible starts from  0 th index
        var i = 0; 

        // declaring j vraible starts from 1 th index
        var j = 1; 

        // declaring intially 100
        var range = 100;
       

    
       // generating for loop for iterating upto 1000 numbers for prime numbers
        for (let prime = 2; prime <= 1000; prime++) 
        
        {   

            // checking that generating prime with isprime method through if condition
            if (utility.isPrime(prime)) 
            
            
            {
                

                // checking that prime number with range through if condition
                if (prime <= range)
                
                
                {

                    // that genaerated prime number it will intializing to array
                    array[i][j] = prime;


                    // j varaible will incremented after intializing 
                    j++;
                }
 

                //  condition for if condition where no  satisfying for that values  
                else 
                
                
                {
                    // again j value  reintialized to 1 
                    j = 1;


                  // now range it will starts from another range by adding 100 to that range
                    range = range + 100;



                    i++;
                   // array[i][j] = prime;
                }
            }
        }
        console.log("The prime numbers are presents in the given range :\n");
       
                // loops for printing the generated prime numbers in two dimensional array

        for (var i = 0; i < array.length; i++) 
            {
                req.print("[")
            for (var j = 0; j < array[i].length; j++) 
            
            {
              // it will printed that two dimensional generated elements
                  req.print(array[i][j]+" ");
            }

            console.log("]]");
        }
        console.log();
    }

}