const Utility=require('../Utility/utility');
var read=require('readline-sync');
function monthlypack()
{
    var p=+process.argv[2];
    var y=+process.argv[2];
    var r=+process.argv[3];
    Utility.monthlypack(p,y,r);
    
    

}
monthlypack();