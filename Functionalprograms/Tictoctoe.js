const readline = require('readline-sync');
/**
 * import the Utility class to use the functionalities.
 */
const util = require('../Utility/utility');
function ticTocToe(){
    var flag = false;
    var arr = util.intializeGame();
    console.log("Let computer be player 1(O)_and you be the player 2(X)");
    console.log("Ready for the game:-)");
    var count = 1;
    while(count<=9) 
    {   



        // computer method accesses from util class
	    arr = util.computerPlayer(arr);
	    count++;
        flag = util.check(arr);



        //checking condition either we win or loss 
	    if(flag)
	    {
    	    console.log("Computer is the winner");
	        break;
	    }
	    else if(count==9)
	    {
		    console.log("Oh oo, The match is draw");	
		    break;
        }
        
        // user method accesses from util class
	    arr = util.userPlayer(arr);
        flag = util.check(arr);
         //checking condition either we win or loss 
	    if(flag)
	    {
	        console.log("Congratulations You are the winner");
		    break;
    	}
	    count++;
		}
        console.log("Game end");
}
ticTocToe();
/////////tic toc 