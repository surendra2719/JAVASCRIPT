/*************************************************************************************************
 *  @Purpose        : To create the JSON from Inventory Object and output the JSON String.      
 *  @file           : stockAccount.js
 *  @overview       : To Extend the inventory program to Create InventoryManager to manage the Inventory.
                      The Inventory Manager will use InventoryFactory to create Inventory Object from JSON.
                      The InventoryManager will call each Inventory Object in its list to calculate the Inventory
                      Price and then call the Inventory Object to return the JSON String.
 *  @author         : surendra
 *  @version        : 1.0
 *  @since          : 04-01-2019
 ***************************************************************************************************/
var utility = require('../oops/utilityForOoops');
/**
 * accessing the util
 */
function commericialData()
{   /**
    * accessing the stock method from util
    */
    utility. commericial();
}
commericialData()

