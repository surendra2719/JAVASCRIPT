const readline=require('readline-sync');
module.exports={
    replace(user){
    if(user.length>=3)
    {
        console.log(" hello "+user+" how are you ");

    }
    else
    {
        console.log("enter the characters more than three");
    }
    
},
flip(rn)
{
    var tails=0;
var heads=0;
var flip=readline.question("enter the number of times to flip the coin");

for(var i=1;i<=flip;i++)
{
 var a=readline.question("press any key ");
 var rn=Math.floor(Math.random()*2);
    if(rn==1)
    {
        heads++;
        console.log(rn);
    }
    else
    {
        tails++;
        console.log(rn);
        
    }
}
    console.log("the percent of heads is "+(heads/flip)*100 + "%");
    console.log("the percent of tails is "+(tails/flip)*100 + "%");
    console.log(heads);
    console.log(tails);
},
Leapyear(yr)
{
    var yr=readline.question("enter year to check whether it is leap year or not");
    if(yr.length>=4)
    {
        if(yr%4==0)
        {
            console.log(yr+" is leap year");
        }
        else
        {
            console.log(yr+" is  not leap year");
        }
    
        
    }
},
power(p)
{
    var p=readline.question("enter the power");
    if(p==0)
    {
        console.log(1);
    }
    for(var i=1;i<=p;i++)
    {
        console.log(Math.pow(2,i));
    }
},
Gambler(goal)
{


var  goal =readline.question("enter the goal ");
	
	var win=0;
	var loose=0;
	var toss=0;
	var amount=0;
	
	while(amount<goal) {	
		toss++;
var b=	readline.question("Enter your betting number 1 to 6");
	
		
		readline.question("press any key to toss ");
	
		var r=Math.floor(Math.random()*6+1);
		if(b==r) {
			win++;
			amount=amount+r;
            console.log(amount);
        }
			if(amount>goal) {
				amount=amount-r;
				console.log(amount);
		}	
		else {
            loose++;
            console.log(amount);
		}
	
    }	
var pw=(win*100)/toss;
var pl=(loose*100/toss);
	
	
	console.log("win percentage out of toss is "+pw);
	console.log("loose percentage out of toss "+pl);
	
	// show  user to all the values 
	console.log("win==========>"+win);
	console.log("loose========>"+loose);
	console.log("amount========>"+amount);
	console.log("toss===========>"+toss);



},
Harmonic(n)
{
var n=readline.question("enter nth number")
	var sum =0;
	for(var i=1;i<=n;i++)
	{
		sum= sum+1/i;
	}
	console.log("nth harmonic number is"+ sum);
},
coupun(c)
{
    //console.log("hai hahba");
    var array=[];
    for(var i=0;i<c;i++)
    {
    array[i]=Math.floor(Math.random()*9+1);
    for(var j=0;j<i;j++)
    {
        if(array[i]==array[j])
        {
            i--;
        }

    }
    }
    return array;
},
}
