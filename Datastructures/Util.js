/*****************************************************************************************
 *purpose   : it wiil giving methods to perform  methods

 
 * @file    :Util.js
 * @overview: Reading methods for files 
 * @author  : surendra 
 * @version : 1.0
 * @since   : 04/01/2019 
 ***************************************************************************/
module.exports =
 {
     
    writeFile(fileName, data) 
    {

        const fs = require('fs');
      //  accessing the files 
        fs.writeFile(fileName, data, function (err)
         {
            if (err)
             {
                return console.log(err);
            }

        });
    } 
}