/*****************************************************************************************
 *purpose   : Write static functions to return all permutation of a String using iterative method
 * @file    :  Stringpermut.js
 * @overview:   Check if the arrays returned by two string functions are equal. 



 * @version : 1.0
 * @since   : 04/01/2019 
 ***************************************************************************/
const Utility=require('../Utility/utility');
const Utility=require('../Utility/utility');
var readline=require('readline-sync');
function permutation()
{
    var str=readline.question("enter value of string");
    Utility.permutation("",str,0,str.length-1);
}
permutation();

