

var stackaccess=require('../Datastructures/Stack');
var readline=require('readline-sync');

function Stack()
{
    var st= new stackaccess.Stack;
  
    var str=readline.question("Enter your mathematical expression with parantheses ");
   var ch,i;
   
   for(i=0;i<str.length;i++)
   { ch=str.charAt(i);
    
       if(ch=='(' || ch=='[' || ch=='{')
       {
       st.push(ch);

       }
       else{
           switch (ch)
           {
               case ')' : if(st.pop()!='('){
                                return false;
                            }
                            break;
               case ']' : if(st.pop()!='[')
               {
                   return false;
               }
               break;
               case '}' : if(st.pop()!='{')
               {
                   return false;
               }break;
           }
       }


   }
   if(st. getSize()==0){
   return true;
   }
   return false;
}
var bol=Stack();


if(bol){
    console.log("String is balanced");
    
}
else{
    console.log("Not balanced");
    }