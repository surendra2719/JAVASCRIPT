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
Distance(Distance)
{
    
    var a=readline.question(" enter the value of a ");
    var b=readline.question(" enter the value of b ");
      
        var Distance =Math.sqrt(((Math.pow(a, 2))+(Math.pow(b, 2))));
        
		console.log("distance between  point"+a+"and"+b+ "and origin is" +Distance );
		

},
Prime(n)
{
    var n=readline.question("enter the n value");
    for(var i=1;i<=n;i++)
    {
            var count=0;
        for(var j=1;j<=i;j++)
        {
            if(i%j==0)
            {
                count++;
            }
        }
        if(count==2)
        {
            while(n%i==0)
            {
                console.log(i);
            n=n/i;
            
            }
         }


  }
},
quad(a,b,c)
{
    var a   =readline.question("enter the value of a");

    var b  =readline.question("enter the value of b");
    var c  =readline.question("enter the value of c");
    var d  = Math.sqrt(b*b-4*a*c);
    var denom=2*a;
    var r1 = (-b+d)/denom;
    var r2 = (-b-d)/denom;
    console.log(" first root of equation is "+ r1);
    console.log(" second root of equation is "+ r2);
},
Triplet(arr)
{
    for(var i=0;i<arr.length-2;i++)
    for(var j=i+1;j<arr.length-1;j++)
    for(var k=j+1;k<arr.length;k++)
    if(arr[i]+arr[j]+arr[k]==0)
    {
     console.log("sum of three numbers "+arr[i]+" "+arr[j]+" " +arr[k])
    }

},
Arrayinput(arr)
{
var num=readline.question("enter the size");
for(var i=0;i<num;i++)
{
    arr[i]=Number(readline.question(" "));
}
return arr;
},
Windchil(t,v)
{

   var t=readline.question("enter the value of t");
   var v=readline.question("enter the value of v");

   var w=35.74+0.6215+(0.4275*t-35.75)*Math.pow(v,0.16);
   console.log("temparature is "+t);
   console.log("windspeed is "+v);

   console.log("windchill is "+w);

  
    
},
gettime()
{
    var date =new Date();
    var n=date.getTime();
    return n;
},
stopwatch (start,stop)
{
    
  var time=stop-start;
  var div =time/1000;
  return div;
 
},
permut(b)
{ 
      var input=readline.question("string");
    var outputstring;
    if(b===0)
    {
        return b;
    }
    if(b===1)
    {
       return b;
    }
    else
    {
        for(var i=0;i<b.length;i++)
        {

        }
    
    }
},
permutation(string, str, first, last) {
    if (first == last) {
        console.log(str);
        string = string + str;
    }
    else {
        for (let index = first; index <= last; index++) {
           
            str = this.swapString(str, first, index);
            
            string = this.permutation(string, str, first + 1, last);
            str = this.swapString(str, first, index);
        }
    }
    return string;
},
swapString(str, first, last) {
    var as = '';
    
    var ch = [];

    ch = str.split('');
    var temp = ch[first];
    ch[first] = ch[last];
    ch[last] = temp;
    for (let index = 0; index < str.length; index++) {
        as = as + ch[index];
    }
    return as;
},
twoDarry(r, c) {
   
    var array = [];
    console.log("enter elements ");

    for (let i = 0; i < r; i++) {
        array.push([]);

        for (let i2 = 0; i2 < c; i2++) {
            array[i][i2] = readline.question('');
        }
    }
    return array;
},
dayOfWeek(d, m, y)
 {
    var y0 = y - Math.floor((14 - m) / 12);
    var x = y0 + Math.floor((y0 / 4)) - Math.floor((y0 / 100)) + Math.floor((y0 / 400));
    m0 = m + 12 * Math.floor((14 - m) / 12) - 2;
    var d0 = (d
         + x + Math.floor((31 * m0) / 12)) % 7;
    
    return d0;
    
    
},
sort(string)
{
    var  character=string.split('')
    for(var i=0;i<character.length;i++);
    for(var j=i+1;j<character.length;j++);
    {
        var temp=character[i];
        character[1]=character[2];
        character[2]=temp;
    }
    
},
anagram(string1 , string2)


{
    if(string1.length!=string2.length)
    return false;


 var character=this.sort(string1);
 var character1=this.sort(string2);
 if(character==character1)
 {
     console.log("strings are anagram");
 }
 else
 {
    console.log("strings are not anagram");
 }
},
prime(n)
{  
    var n = readline.question("enter n value");
for(var i=1;i<n;i++)
{
    p=0;
    for(var j=2;j<i;j++)
    {
        if(i%j==0)
        {
           p++; 
           break;
        }
    }
if(p==0)
{
    console.log(i+" ");
}
}

},
monthlypack( p,  y , r)
{
	var r0=r/(12*100);
	var n=12*y;
    var payment=p*r0/(1-Math.pow(1+r, -n));
    var calculation = (p * r) / (1 - (payment))
    console.log("The monthly payment " + calculation);
},
temparature(choice)
{
 
        if(choice==1)
        {
            var temparature = readline.question("enter temparature in celcius");
            var converted=(9/5.0*(temparature)+32);
            console.log("converted temparature in f"+converted)
        } 
        else if (choice==2)  
        {
            var temparature = readline.question("enter temparature in fahrenheit");
            var converted=5/9.0*(temparature-32);
            console.log("converted temparature in c"+converted)
        }
        else
        {
            console.log("entered input is wrong ")
        }
    },
    squarenon(n)   
    {
        if(n>0)
        {
            var t=n;
        var epsilon=1e-15;
         while(Math.abs(t-n/t)>epsilon*t)
         {
             t=((n/t+t)/2);
         }
          console.log("square root of number is"+t);
        
        }
        else{
            console.log("num should be positive num");
                }

            }
        }
    

 