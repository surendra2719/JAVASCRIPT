/*****************************************************************************************
 *purpose   : Print the String with User Name 


 * @file    :  hello.js
 * @overview: Take User Name as Input. Ensure UserName has min 3 char ,Replace <<UserName>> with the proper name
 * @author  : surendra 
 * @version : 1.0
 * @since   : 04/01/2019 
 ***************************************************************************/
const Utility= require('../Utility/utility');
var readline = require('readline-sync');
function replace()
       {    try{
              var read=readline.question("enter your name");
              if(!isNaN(read)) throw "invalid"
              Utility.replace(read);
       }
       
       catch (err)
       {
              console.log(err)
       }
          
       }
replace();