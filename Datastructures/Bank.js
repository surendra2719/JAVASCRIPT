
/*****************************************************************************************
 *purpose   : Panel to add People to Queue to Deposit or Withdraw Money and dequeue 
              Write a Queue Class to enqueue and dequeue people to either deposit or withdraw money 
              and maintain the cash balance

 
 * @file    : Bank.js
 * @overview:  Create a Program which creates Banking Cash Counter where people come in to deposit Cash and withdraw Cash.
               Have an input panel to add people to Queue to either deposit or withdraw money 
               and dequeue the people. Maintain the Cash Balance. 
 * @version : 1.0
 * @since   : 04/01/2019 
 ***************************************************************************/


 
var access = require('../Datastructures/Queue');
// accessing  a queue class through require keyword 

var readline = require('readline-sync');
// accessing  a readline through require keyword 


function queue() 
// method for queue


{
    var req = new access. Queue;
    //  accesing  functions queue class 
    
    var put = []; 
    // declaring array
    var totalmoney = 1000;
    // intializing the totalmoney

    flag = true;
    // checking boolean condition with varaible flag

    var inform = readline.question("Enter the total number of transactions  :");
    
    
    //  inform vraible through user input
    
       if(inform>0)
       // if condition checking the providing  an inform should be greater than zero or not
       
       {

        
        
        // for loop for itirating the inform varaible
        for (var i = 1; i <= inform; i++) 
        
        {

            var answer = readline.question("Enter 1 to deposit the money\nEnter 2  to withdraw the money \n ");
            //  declaring a numbers one and two for users choice



            if (answer == 1)
            // by user choice one it will enter into loop



            {
                var amount = readline.question("Enter total amount for Depositing  money into the account :\n");
                // reading amount varaible for deposting money

                

                var put = req.enque(Number(amount));
                 // accessing enque method from queue claas
             
            }


            else if (answer == 2) 
             // by user choice two it will enter into loop



            {
                 var amount = readline.question("Enter total amount for Withdrawing money into account  :\n");
               // reading amount varaible for withdrawing money 
                var get = req.enque(Number(-amount));

                
                   // accessing enque method from queue claas
                flag= true;
                // checking flag along with boolean condition
             
            }


            else
             {
                console.log(" your key  should be correct ");
                  // checking flag along with boolean condition
             
                flag= false;
                // checking flag along with boolean condition
                return;
            }
        }


        }



        else
        {

            console.log("please enter valid input ");
            //checking the input it should be in correct form
            return;
        }
    


    
    if (flag)
    // checking the flag vraible with if condition
     {
        var sum = 0;
        // declaring sum vraible



        for (let i = 1; i <= inform; i++)
         {
           sum = (sum+ req.deque());
           // adding sum variable with amount (deque or enqeue)
        }


        
        var totaltransaction = totalmoney + sum;
        // declaring varaible for someup with total with sum varaible


        
        console.log("At the end of the day Total money left in the bank ", totaltransaction);


        //  checking the money with if conditions
        if (totaltransaction <totalmoney) 
        {
            console.log("money in bank not maintained");
        }

        else 
        {
            console.log("Money in bank maintained");
        }

    }
}


queue();