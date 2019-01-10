const Utility=require('../Utility/utility');
var readline=require('readline-sync');
function vendingmachine()
{
 
  var value=readline.question(" enter the amount you required number of notes");

  Utility.vendingmachine(value,0,0);
}
vendingmachine();
