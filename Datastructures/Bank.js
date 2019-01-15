var access = require('../Datastructures/Queue');
var readline = require('readline-sync');

function Queue() {
    var req = new access. Queue;
    var put = [];
    var totalmoney = 1000;
    flag = true;
    var inform = readline.question("Enter the total number of transactions  :");
    
       if(inform>0){
        for (var i = 1; i <= inform; i++) {
            var answer = readline.question("Enter 1 to deposit the money\nEnter 2  to withdraw the money \n ");
            if (answer == 1) 
            {
                var amount = readline.question("Enter total amount for Depositing  money into the account :\n");
                var put = req.enque(Number(amount));
             
            }
            else if (answer == 2) 
            {
                var amount = readline.question("Enter total amount for Withdrawing money into account  :\n");
                var get = req.enque(Number(-amount));
                
                flag= true;
             
            }
            else {
                console.log(" your key  should be correct ");
                flag= false;
                return;
            }
        }
        }
        else{
            console.log("please enter valid input ");
            return;
        }
    
    
    if (flag)
     {
        var sum = 0;
        for (let i = 1; i <= inform; i++)
         {
           sum = (sum+ req.deque());
        }
        
        var totaltransaction = totalmoney + sum;
        console.log("At the end of the day Total money left in the bank ", totaltransaction);
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
Queue();