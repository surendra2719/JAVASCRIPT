/*****************************************************************************************
 *purpose   : Print the percentage of Head vs Tails

 * @file    :  Flipcoin.js
 * @overview:  Use Random Function to get value between 0 and 1. If < 0.5 then tails or heads
 * @author  : surendra 
 * @version : 1.0
 * @since   : 04/01/2019 
 ***************************************************************************/
const Utility=require('../Utility/utility');
var readline=require('readline-sync');
function flip()
{
    Utility.flip();
}
flip();