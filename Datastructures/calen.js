/*****************************************************************************************
 *purpose   :  prints the Calendar of the month.
 
 * @file    : calen.js
 * @overview: Store the Calendar in an 2D Array, the first dimension the week of the month and the second dimension stores the day of the week. Print the result as following.

 
 * @version : 1.0
 * @since   : 04/01/2019 
 ***************************************************************************/
var access1 = require('../Datastructures/utilityForDataStructures/queue');// accessing queue through require keyword 
var utility = require('../Datastructures/utilityForDataStructures/utilityForProgram');//accessing utilityprogram through require keyword
var take = require('util');// accessing for printing through take varaible
function calender()// method for calender 
{
    var dayQue = new access1.Queue;// decalaring dayque varaible 
    var dateQue = new access1.Queue;
    var month = +process.argv[2];// declaring datequeue varaible 
    var year = +process.argv[3]; // accessing month varaible through command line argument 
    var day = utility.dayOfWeek(1, month, year);// accessing year varaible through command line argument 
    console.log(day) // printing the day 
    var week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var dates = [0, 31, 28, 31, 30, 31, 31, 30, 31, 30, 31, 30, 31]; // declaring week varaible 
    var leap = utility.leapYear(year); //declaring leap varaible it will accessing that method through utility program 
    if (leap == true)  // checking leap year through if condition 
    {
        dates[2] = 29;
    }
    for (var i = 0; i < week.length; i++) // loop for generating week 
    {

        dayQue.enque(week[i]); // adding week  in queue
    }
    for (var i = 1; i <= dates[month]; i++) //generating loop for dates
    {
        dateQue.enque(i);  // adding dates in queue
    }
    for (var i = 0; i < week.length; i++)  // generating week loop for printing space 
    {
        take.print(dayQue.deque() + "  ");
    }
    console.log();
    for (var i = 0; i < (day * 5); i++)  //  generating loop for printing empty space in string
    {
        take.print(" ");
    }
    for (var i = 1; i <= dates[month]; i++)  // generating loop for print single values and double values 
    {
        if (i < 10) // checking if condition for single digit values less than 10 

        {
            take.print(" " + dateQue.deque() + "   ");
        }
        if (i > 9)    // check if condition for double digit value 
        {
            take.print("" + i + "   ")
        }
        if ((i + day) % 7 == 0)  // checking with if condition it will printed upto  7 week day
        {
            // printing 

            console.log()

        }
    }
    console.log("\n\n");
}
calender();