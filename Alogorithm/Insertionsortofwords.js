const Utility=require('../Utility/utility');
var readline=require('readline-sync');
function Insertionsort() 
{
    var array=[];
    var array=Utility.ArrayinputStr(array);
    console.log(" Your Array before Sort "+array);
    
    var binary=Utility.Insertionsort(array);
    console.log("After sorting  ");
    console.log(binary);
}
Insertionsort();
