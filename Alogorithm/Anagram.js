const Utility=require('../Utility/utility');
var readline=require('readline-sync');
function anagram()
{
    var string1=readline.question("enter the value of string1");
    var string2=readline.question("enter the value of string2");
   Utility.anagram(string1,string2);
}
anagram();