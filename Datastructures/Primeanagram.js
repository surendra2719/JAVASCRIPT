/*****************************************************************************************
 *purpose   : it wiil providing method accessing for prime angaram  program through linked list 

 
 * @file    : Primeanagram.js
 * @overview: Reading methods for prime anagram through linked lilst 
 * @author  : surendra 
 * @version : 1.0
 * @since   : 04/01/2019 
 ***************************************************************************/



 var utility = require('../Datastructures/Anagramutility');

// accessing  Anagram utility through require keyword


 var stack= require('../Datastructures/stack')

 //  accessing the stack 
var req = require('util');
// accessing prime utility class through require keyword


module.exports = {
// modules exporting for prime twod  
    
    primeAnag() 
    
    {

// modules exporting for primeangram 

        var arr = [];

      

         

        // declaring an empty array

        var array = [["[0-1000] "]]; 
                // declaring an array with range of values

        
        for (let i = 2; i < 1000; i++) 

               // generating for loop for iterating upto 1000 numbers for prime numbers

        
        {


     // checking that generating prime with isprime method through if condition


            if (utility.isPrime(i)) 
            {
                arr.push(i);



                // pushing an elemetnts into array

            }
        }
        
        // declaring intially 100

        var range = 1000,


     // declaring k varaible
         k = 0;
                // loops for printing the generated prime numbers in two dimensional array

        for (let i = 0; i < arr.length; i++) 
        
        
        {
            for (let j = i + 1; j < arr.length; j++) 
            
            {
                if (utility.isAnagram(arr[i],arr[j])) 
        // checking that generating prime with isZAnagram method through if condition

                
                {
                    if (arr[i] <= range)

           // checking that prime numbers with range through if condition

                    
                    {
                        if (arr[j] <= range) 
                        {
                            // pushing  that generated elements in array
                            array[k].push(arr[i]);
                            array[k].push(arr[j]);
                        }

                    }
                    
                    
                    else


                     {
                     

   // k vraible will incremented
                        k++;


                        if (arr[j] <= range)
           // checking that prime numbers with range through if condition


                        
                        {
     // pushing the elements into array
                            array[k].push(arr[i]);
                           array[k].push(arr[j]);
                        }
                    }
                }
          
            }
        }
        console.log("The Number which are prime and anagram ");

        for (let i = 0; i < array.length; i++)
        // loops for printing for that generated elements 
         {
          
            for (let j = 0; j < array[i].length; j++) 
            {
                req.print(array[i][j]+" ");
                if (j == 0) 
                {
                    req.print(" ");
                } else
                 
                {
                    if (j != array[i].length )
                        req.print(",")
                }
            }
            console.log();
           

        }
        console.log('\n');
    }

}