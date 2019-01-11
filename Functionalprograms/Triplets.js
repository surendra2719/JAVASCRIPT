/*****************************************************************************************
 *purpose   :  Find distinct triples (i, j, k) such that a[i] + a[j] + a[k] = 0

 * @file    :  Triplets.js
 * @overview:   A program with cubic running time. Read in N integers and counts the   number of triples that sum to exactly 0.


 * @version : 1.0
 * @since   : 04/01/2019 
 ***************************************************************************/
const Utility=require('../Utility/utility');
var read=require('readline-sync');
function Triplet()
{
    var a=[];
    var arr=Utility.Arrayinput(a);

    Utility.Triplet(arr)

}
Triplet();
