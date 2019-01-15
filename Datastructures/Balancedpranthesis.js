
/*****************************************************************************************
 *purpose   : Read in Arithmetic Expression such as  BALANCED PARANTHESIS (),[],{}

 
 * @file    : Balancedpranthesis .js
 * @overview: Take an Arithmetic Expression such as balance paranthesis 
 *            where parentheses are used to order the performance of operations. 
 *            Ensure parentheses must appear in a balanced 
 * @version : 1.0
 * @since   : 04/01/2019 
 ***************************************************************************/
var stackaccess=require('../Datastructures/Stack');
// accessing  a stack class through require keyword 
var readline=require('readline-sync');
// accessing  a  readline through require keyword 
function Stack()
// it is function to calling stack
{
    var stack= new stackaccess.Stack;
    // accessing a stack 
  
    var string=readline.question("Enter your mathematical expression with parantheses ");
    // giving an input by user
   var character,i;
   // declaring  varaibles 
   
   for(i=0;i<string.length;i++)
   // for given expression it will itirated by for loop
   {
        character=string.charAt(i);
    // checking the characters giving paranthesis through if loop
       if(character=='(' || character=='[' || character=='{')


       {
       stack.push(character);
       // accessing push method from stack class

       }

       else
       {
           // using switch break condition for different paranthesis
           switch (character)
           {
               case ')' : if(string.pop()!='('){
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
               }break;
           }
       }


   }
    // checking hte size of that string
   if(stack. getSize()==0) 
   {
   return true;
   }
   return false;
}
// verifying boolean condition with stack 
var bol=Stack();


if(bol)
{
    console.log("String is balanced");
    
}
else
{
    console.log("Not balanced");
    }