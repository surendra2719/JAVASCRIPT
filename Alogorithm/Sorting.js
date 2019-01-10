const Utility=require('../Utility/utility');
var readline=require('readline-sync');

function search() {
    console.log("press 1 for Binary Search");
    console.log("press 2 for BinarySearch For String");
    console.log("press 3 for Insertion Sort ");
    console.log("press 4 for Insertion Sort for String ");
    console.log("press 5 for  bubble Sort ");
    console.log("press 6 for  bubble Sort for String ");

    var n=readline.question("Enter Your choice ");
    var n1=Math.floor(n);
    switch (n1) {       
        case 1:{
            var start=Utility.gettime();
            var array = [];
            var array=Utility.Arrayinput(array);
            console.log("Your array is "+array);
            var search=readline.question("Enter your Search Element ");
            var binary = Utility.Binarysearch(array, search);
            
            if(binary==-1){
                console.log("Your number is not Present ");
              }
             else{
             console.log("Your number is in " + binary + " index");
             }     
             var stop=Utility.gettime();
             var time=Math.floor((stop-start)/1000); 
             console.log("Time taken  "+time+" seconds");
                   break;
            }
            case 2:{
                var start=Utility.gettime();
                  var array=[];
                  var array=Utility.ArrayinputStr(array);
                  console.log("Your Array is "+array);
                  var search=readline.question("Enter your Search Array ");
                  var binary=Utility.Binarysearchstr(array,search);
                   if(binary==-1){
                     console.log("Your String is not Present ");
                   }
                  else{
                  console.log("Your String is in " + binary + " index");
                  }
                  var stop=Utility.gettime();
                  var time=Math.floor((stop-start)/1000); 
                  console.log("Time taken "+time+" seconds");
                  break;

                   }
            case 3:{
                var start=Utility.gettime();
                    var array=[];
                    var array=Utility.Arrayinput(array);
                    console.log("your Array before "+array);
                    
                    var binary=Utility.Insertionsort(array);
                    console.log("After sorting  ");
                    console.log(binary);
                    var stop=Utility.gettime();
                    var time=Math.floor((stop-start)/1000); 
                    console.log("Time taken  "+time+" seconds");
                    break;
                   }
              case 4:{ 
                var start=Utility.gettime();
                       var array=[];
                       var array=Utility.ArrayinputStr(array);
                       console.log(" Your Array before Sort "+array);
                       
                       var binary=Utility.Insertionsort(array);
                       console.log("After sorting  ");
                       console.log(binary);
                       var stop=Utility.gettime();
                       var time=Math.floor((stop-start)/1000); 
                       console.log("Time taken  "+time+" seconds");
                       break;
                      } 
              case 5:{
                var start=Utility.gettime();
                    var array=[];
                    var array=Utility.Arrayinput(array);
                    console.log(" Your Array before Sort "+array);
                    
                    var binary=Utility.BubbleSort(array);
                    console.log("After sorting  ");
                    console.log(binary);
                    var stop=Utility.gettime();
                    var time=Math.floor((stop-start)/1000); 
                    console.log("Time taken  "+time+" seconds");
                    break;
                         
                   }
               case 6:{
                var start=Utility.gettime();
                var array=[];
                var array=Utility.ArrayinputStr(array);
                console.log(" Your Array before Sort "+array);
                
                var binary=Utility.BubbleSort(array);
                console.log("After sorting  ");
                console.log(binary);
                var stop=Utility.gettime();
                var time=Math.floor((stop-start)/1000); 
                console.log("Time taken  "+time+" seconds");
                break;
                      } 

                }
            }
search();