
const Utility=require('../Utility/utility');
var readline=require('readline-sync');
function  swaping()
{
        var num=readline.question("enter any key to show decimal value\n");
        var y=Utility. swaping(num);
        console.log("Converted binary to decimal num is\n" +Utility.swaping(y)); 
        //Utility.swap();
}
swaping();