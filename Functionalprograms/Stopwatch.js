/*****************************************************************************************
 *purpose   : Write a Stopwatch Program for measuring the time that elapses between the start and end clicks

 * @file    :  Stopwatch.js
 * @overview:   Print the elapsed time.


 * @version : 1.0
 * @since   : 04/01/2019 
 ***************************************************************************/
const Utility=require('../Utility/utility');
var readline=require('readline-sync');
function stopwatch()
{
    readline.question("press any number to start");
     var start= Utility.gettime();

    readline.question("press any number to stop");
    var stop=Utility.gettime();
    var time=Utility.stopwatch(start,stop);
    console.log("THE ELAPSED TIME IS"+time);

}
stopwatch();
