const Utility=require('../Utility/utility');
var read=require('readline-sync');
function temparature()
{
    var choice=+process.argv[2];
   
    Utility.temparature(choice);
}
temparature();