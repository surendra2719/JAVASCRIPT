/*****************************************************************************************
 *purpose   : it wiil providing method accessing for isprime method

 
 * @file    : Primeutility.js
 * @overview: Reading methods for unorderedlinkedlist file
 * @author  : surendra 
 * @version : 1.0
 * @since   : 04/01/2019 
 ***************************************************************************/

module.exports = {
// method for checking prime or not
isPrime(number) {
    if (number == 0 || number == 1) {
        return false;
    }

    // for loop for number given by user it will iterating what the user given the input for printing 
    for (let index = 2; index < number; index++)
    
    {   // verifying that input divide by index or not
        if (number % index == 0) 
        
        {
            return false;
        }

    }// it will not satisfying means return false
    return true;
}
}