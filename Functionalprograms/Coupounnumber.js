/*****************************************************************************************
 *purpose   : write Class Static Functions to generate random number and to process distinct coupons.

 * @file    :  Coupon.js
 * @overview: Given N distinct Coupon Numbers, how many random numbers do you need to generate distinct coupon number? This program simulates this random process.
 * @author  : surendra 
 * @version : 1.0
 * @since   : 04/01/2019 
 ***************************************************************************/
const Utility=require('../Utility/utility');
var read=require('readline-sync');
function coupun()
{
    var c=read.question("enter  the number ");
    rev =Utility.coupun(c);
    console.log(rev);

}
coupun();