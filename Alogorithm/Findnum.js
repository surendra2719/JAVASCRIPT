const Utility=require('../Utility/utility');
var readline=require('readline-sync');
function findnumber()
{
    var first=readline.question(" enter your first range");
    var last=readline.question(" enter your last ange");

    var first=Math.floor(first);
    var last=Math.floor(last);
    var c=Utility.findnumber(first,last);
    console.log(" your number is"+c);
}
findnumber();