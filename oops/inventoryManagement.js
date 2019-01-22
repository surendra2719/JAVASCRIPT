/*****************************************************************************************
 *purpose   : Get JSON Object in Java or NSDictionary in iOS. Create Inventory Object from JSON. Calculate the value for every Inventory. 
 * @file    : inventoryManagement.js
 * @overview: Get JSON Object in Java or NSDictionary in iOS. Create Inventory Object from JSON. 
              Calculate the value for every Inventory. 
 * @author  : surendra 
 * @version : 1.0
 * @since   : 04/01/2019 
 **************************************************************************/
var readline=require('readline-sync');
var utility=require('../oops/utilityForOoops');
var filestream = require('fs');
var content = filestream.readFileSync('../oops/JSONfiles/inventoryManagem.json');
/**
 * filstream reading the files 
 * acess access the file from util
 * content redaing content from JSON files  
 */
var data = JSON.parse(content);
/**
 * JSON.parse it converts contents in JSON files to javaScript object
 */
function invent()
{
    /**
     * accessing the inventManagement method from util
     */
    utility.inventManagement(data);
}
invent();