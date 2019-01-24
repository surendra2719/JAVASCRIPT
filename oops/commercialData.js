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
/**
 * filstream reading the files 
 * accessing the prompt module
 * content redaing content from JSON files  
 */
var fs = require('fs');
var prompt = require('prompt-sync')();
let data = fs.readFileSync('../oops/JSONfiles/company.json');
/*
* function JSON.parse() is used to convert the string into a JavaScript Objects
*/
var objects = JSON.parse(data);
/**
 * creating a stockAccount node to create any new node with null values.
 */
class stockAccount {
    constructor(stockName, numberOfshare, sharePrice) {
        /**
         * creating an object for stockname,numberofshare & shareprice 
         */
        this.stockName = stockName;
        this.numberOfshare = numberOfshare;
        this.sharePrice = sharePrice;
    }
    /**
     * to buy shares
     */
    buy() {
        try {
            /**
             * add shares of stock to account 
             */
            var stock = prompt('enter number of stocks: ');
            if (isNaN(stock)) throw "invalid input"
        } catch (err) {
            console.log(err);
        }
        for (var i = 1; i <= stock; i++) {
            try {
                var name = prompt('enter the name : ');
                if (!isNaN(name)) throw "invalid input"
                var number = prompt('enter the number of share: ');
                if (isNaN(number)) throw "invalid input"
                var price = prompt('enter the price: ');
                if (isNaN(price)) throw "invalid input"
                objects.push({
                    "name": name,
                    "number_Of_Share": number,
                    "price": price
                })
                console.log(objects);
            } catch (err) {
                console.log(err);
            }
        }
    }
    /**
     * logic for selling
     */
    sell() {
        /**
         * subtract shares of stock from account 
         */
        var i = prompt('which index you want to sell : ');
        /**
         * deleting the element 
         */
        delete objects[i];
        console.log(objects);
    }
    /**
     * to save data to file
     */
    save() {
        /**
         * save account to file 
         */
        var result = JSON.stringify(objects)
        fs.writeFileSync('/home/bridgelabz/surendra/oops/JSONfiles/commericial.json', result, 'utf-8')
    }
    /**
     * to display the data 
     */
    printReport() {
        /**
         * print a detailed report of stock & values 
         */
        var sum = 0;
        console.log(objects.length);
        for (var i = 0; i < objects.length; i++) {
            var number = parseInt(objects[i].number_Of_Share * objects[i].price);
            console.log("the total price of each stock is: " + number);
            sum = parseInt(sum + number);
        }
        console.log("the total price of stock is: " + sum);
    }
}
var stock = new stockAccount();
while (1) {
    console.log('1.Buying the  Shares');
    console.log('2.Selling the Shares');
    /**
     * print all the choices to user
  */
    console.log('3.Printing the Stock Report');
    console.log('4.saving the file');
    console.log('5.Exit');
    var choice = prompt('choose an option to perform desired operation :');
    switch (choice) {
        /**
         * switch case implementation to perform the required operation 
         */
        case '1': stock.buy()
            break;
        case '2': stock.sell()
            /**
             * while we selling it will display empty in array through filter the array
             * The filter() method creates an array filled with all array elements 
               and that pass a test (provided as a function)
             * @param {item} item 
             */
            function itemName(item) {
                console.log(item.name);
                if (item.name !== undefined) {
                    return true;
                }
                count++;
                return false;
            }
            objects = objects.filter(itemName);
            console.log(objects);
            break;
        case '3': stock.printReport();
            break;
        case '4': stock.save();
            break;
        case '5': process.exit();
        default: console.log('invalid input ')
            break;
    }
    /**
     * printing the date and time along with answer
     */
    var dateresult = new Date();
    var answer = dateresult.getDate() + "/" + (dateresult.getMonth() + 1) + "/" + dateresult.getFullYear();
    console.log(answer);
    var time = dateresult.toLocaleTimeString();
    console.log(time);
}