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
