
/*****************************************************************************************
 *purpose   : Read in Arithmetic Expression such as  BALANCED PARANTHESIS (),[],{}

 
 * @file    : balancedParanthesis .js
 * @overview: Take an Arithmetic Expression such as balance paranthesis 
 *            where parentheses are used to order the performance of operations. 
 *            Ensure parentheses must appear in a balanced 
 * @version : 1.0
 * @since   : 04/01/2019 
 ***************************************************************************/
var stackaccess=require('../Datastructures/utilityForDataStructures/stack');// accessing  a stack class through require keyword 
var readline=require('readline-sync');// accessing  a  readline through require keyword 
function stackmethod()// it is function to calling stack
{
    var stack= new stackaccess.Stack;  // accessing a stack 
    var string=readline.question("Enter your mathematical expression with parantheses "); // giving an input by user
    var character,i; // declaring  varaibles 
   for(i=0;i<string.length;i++) // for given expression it will itirated by for loop
   {
        character=string.charAt(i); // checking the characters giving paranthesis through if loop
       if(character=='(' || character=='[' || character=='{')
      {
       stack.push(character);  // accessing push method from stack class
     
       }
       else
       {       
         switch (character)// using switch break condition for different paranthesis
           {
               case ')' : if(string.pop()!='(')
                            {
                                return false;
                            }
                            break;
               case ']' : if(string.pop()!='[')
                             {
                   return false;
                             }
               break;
               case '}' : if(string.pop()!='{')
                            {
                   return false;
                            }
               break;
           }
       }
   }
  
   if(stack. getSize()==0)   // checking hte size of that string
   {
   return true;
   }
   return false;
}
var bol=stackmethod();// verifying boolean condition with stack 
if(bol)
{
    console.log("String is balanced");    
}
else
{
    console.log("Not balanced");
    }