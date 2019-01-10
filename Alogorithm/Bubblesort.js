const Utility=require('../Utility/utility');
var readline=require('readline-sync');
function BubbleSort()    
{
var array=[];
var array=Utility.Arrayinput(array);
console.log(" Your Array before Sort "+array);

var binary=Utility.BubbleSort(array);
console.log("After sorting  ");
console.log(binary);
}
BubbleSort();
