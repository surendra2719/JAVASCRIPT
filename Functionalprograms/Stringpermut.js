const Utility=require('../Utility/utility');
var readline=require('readline-sync');
function permutation()
{
    var str=readline.question("enter value of string");
    Utility.permutation("",str,0,str.length-1);
}
permutation();

