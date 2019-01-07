const Utility=require('../Utility/utility');
var read=require('readline-sync');
function coupun()
{
    var c=read.question("enter  the number ");
    rev =Utility.coupun(c);
    console.log(rev);

}
coupun();