const Utility= require('../Utility/utility');
var readline = require('readline-sync');
function replace()
       {
              var read=readline.question("enter your name");
              Utility.replace(read);
       }
replace();