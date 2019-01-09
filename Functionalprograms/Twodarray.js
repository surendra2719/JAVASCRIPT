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