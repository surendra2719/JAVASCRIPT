/*****************************************************************************************
 *purpose   : it wiil providing method accessing for isprime method

 
 * @file    : Primeutility.js
 * @overview: Reading methods for unorderedlinkedlist file
 * @author  : surendra 
 * @version : 1.0
 * @since   : 04/01/2019 
 ***************************************************************************/

module.exports = {

isPrime(number)// method for checking prime or not
 {
    if (number == 0 || number == 1) {
        return false;
    }
   
    for (let index = 2; index < number; index++) // for loop for number given by user it will iterating what the user given the input for printing 
    
    {   // verifying that input divide by index or not
        if (number % index == 0) 
        
        {
            return false;
        }

    }
    return true;// it will not satisfying means return false
}
}