/*****************************************************************************************
 *purpose   :  Write a program to read in Stock Names, Number of Share, Share Price. 
               Print a Stock Report with total value of each Stock and the total value of Stock.

 * @file    :  stockExpression.js
 * @overview:  N number of Stocks, for Each Stock Read In the Share Name, Number of Share, and Share Price
               Calculate the value of each stock and the total valuePrint the Stock Report. Create Stock and Stock Portfolio Class holding the list of Stocks read from the input file. 
               Have functions in the Class to calculate the value of each stock and the value of total stocks
 * @author  : surendra
 * @version : 1.0
 * @since   : 04/01/2019 
 **************************************************************************/
var access = require('../oops/utilityForOoops');
var filestream = require('fs');
var content = filestream.readFileSync('../oops/JSONfiles/stock.json');
/**
 * filstream reading the files 
 * acess access the file from util
 * content redaing content from JSON files  
 */
var data = JSON.parse(content);
function stock() {
    /**
    * accessing the stockExpression method from util
    */
    access.stockExpression(data);
}
stock();