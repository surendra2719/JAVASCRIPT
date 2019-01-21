/*****************************************************************************************
 *purpose   : Read in JSON File and create a JSON file having Inventory Details for Rice, Pulses and Wheats 
              with properties name, weight, price per kg. 

 * @file    : inventory.js
 * @overview: Get JSON Object in Java or NSDictionary in iOS. Create Inventory Object from JSON. 
              Calculate the value for every Inventory. 

 * @author  : surendra 
 * @version : 1.0
 * @since   : 04/01/2019 
 **************************************************************************/
var filestream = require('fs');
var access = require('../oops/utilityForOoops');
var content = filestream.readFileSync('../oops/JSONfiles/inventory.json');
/**
 * filstream reading the files 
 * acess access the file from util
 * content redaing content from JSON files  
 */
var object = JSON.parse(content);
/**
 * JSON.parse it converts contents in JSON files to javaScript object
 */
function inventory() {
    /**
     * accessing the inventory method from util
     */
    access.inventory(object);
}
inventory();




