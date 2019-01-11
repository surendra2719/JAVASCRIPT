/*****************************************************************************************
 *purpose   :  Print function to print 2 Dimensional Array. In Java use PrintWriter with OutputStreamWriter to print the output to the screen.

 * @file    :  Twodarray.js
 * @overview:  A library for reading in 2D arrays of integers, doubles, or booleans from standard input and printing them out to standard output.
 * @author  : surendra 
 * @version : 1.0
 * @since   : 04/01/2019 
 ***************************************************************************/
const Utility=require('../Utility/utility');
var readline=require('readline-sync');
function twoDarray()
{
    var c=readline.question('Enter the required column number ');
    var r=readline.question('Enter the required row number ');
    var res=Utility.twoDarry(r,c);
    
    console.log(res)
}
twoDarray();