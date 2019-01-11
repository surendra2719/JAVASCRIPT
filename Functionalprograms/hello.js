/*****************************************************************************************
 *purpose   : Print the String with User Name 


 * @file    :  hello.js
 * @overview: Take User Name as Input. Ensure UserName has min 3 char ,Replace <<UserName>> with the proper name

 * @version : 1.0
 * @since   : 04/01/2019 
 ***************************************************************************/
const Utility= require('../Utility/utility');
var readline = require('readline-sync');
function replace()
       {
              var read=readline.question("enter your name");
              Utility.replace(read);
       }
replace();