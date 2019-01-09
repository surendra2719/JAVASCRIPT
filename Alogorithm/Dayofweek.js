const Utility=require('../Utility/utility');
var readline=require('readline-sync');
function dayOfWeek(){
    var d=+process.argv[2];
     var m=+process.argv[3];
     var y=+process.argv[4];
    var num=Utility.dayOfWeek(d,m,y);
    var day = ["Sunday", "Monday", "Tuesday", "Wendsday", "Thursday", "Friday", "saturday"];
    if (num <= day.length) {
        console.log("The day falls on :" + day[num])
    }
    else {
        console.log("Invalid day ")
    
    }
    }
    dayOfWeek();