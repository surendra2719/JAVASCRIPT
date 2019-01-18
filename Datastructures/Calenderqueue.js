/*****************************************************************************************
 *purpose   :   Create the Week Object having a list of WeekDay 
                objects each storing the day (i.e S,M,T,W,Th,..) 
               and the Date (1,2,3..) . 
 
 * @file    : Primetwod.js
 * @overview: prime numbers in a 2D Array, the first dimension represents the range 0-100, 100-200...
              While the second dimension represents the prime numbers in that range
 
 * @version : 1.0
 * @since   : 04/01/2019 
 ***************************************************************************/




var access1 = require('./Queue');



// accessing queue through require keyword 



var utility = require('./Utilityforprogram');



//accessing utilityprogram through require keyword


var take=require('util');


// accessing for printing through take varaible\




function calender()
// method for calender 

{

    var dayQue=new access1.Queue;


    // decalaring dayque varaible 
    var dateQue=new access1.Queue;


    // declaring datequeue varaible 
    var month=+process.argv[2];

    // accessing month varaible through command line argument 
    var year=+process.argv[3];


    // accessing year varaible through command line argument 
    
    var day = utility.dayOfWeek(1, month, year);



    // declaring day varaible 
    console.log(day)


    // printing the day 
    var week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];


    // declaring week varaible 
    var dates = [0, 31, 28, 31, 30, 31, 31, 30, 31, 30, 31, 30, 31];





    

    //declaring leap varaible it will accessing that method through utility program 
    
    var leap = utility.leapYear(year);

    // checking leap year through if condition 
    if (leap == true)
     {


        dates[2] = 29;
    }
   

    // loop for generating week 
    
    for (var i = 0; i < week.length; i++)
     {
         // adding week  in queue
        dayQue.enque(week[i]);
    }

    //generating loop for dates
    for (var i = 1; i <= dates[month]; i++) 


    {

        // adding dates in queue

     dateQue.enque(i);
    }
    
    // generating week loop for printing space 
    
    for (var i = 0; i < week.length; i++) 
    {
        take.print(dayQue.deque() + "  ");
    }
    console.log();

    //  generating loop for printing empty space in string
    for (var i = 0; i < (day * 5); i++) {
        take.print(" ");
    }
    // generating loop for print single values and double values 
    
    for (var i = 1; i <= dates[month]; i++) {
        if (i < 10)

        // checking if condition for single digit values less than 10 
        
        {
            take.print(" " + dateQue.deque() + "   ");
            
        }
    // check if condition for double digit value 
        if (i > 9) {
            take.print("" + i + "   ")
        }

        // checking with if condition it will printed upto  7 week day
        if ((i + day) % 7 == 0) 
        {


            // printing 




            console.log();









        }
    
    }
    
    console.log("\n\n");
    }
    calender();