const Utility=require('../Utility/utility');
var readline=require('readline-sync');
function palindrome()
{ var number=readline.question("enter number to find pallindrome");
    Utility.palindrome(number);
}

palindrome();