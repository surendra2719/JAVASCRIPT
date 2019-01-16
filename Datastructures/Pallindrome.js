
var access=require('../Datastructures/Dequeue');
var readline=require('readline-sync');
function check()
{
    var take=new access.Dequeue;
    
    
  var string=readline.question("Enter the string  ");
  
  if (!isNaN(string))

  // checking the input value as a string irrespective of integers
   {
      console.log("input should be in string form ");
      return;
  }
  else 
  {
    var result=take.PalindromeChecker(string);
  if(result==false)
  {
      console.log("String is not an a Palindrome ");
  }
  else 
  {
      console.log("String is palindrome  ");
  }
}
}







check();