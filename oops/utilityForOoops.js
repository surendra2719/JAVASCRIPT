/*****************************************************************************************
 *purpose   : it wiil providing method accessing oops 
 * @file    : utilityForOoops.js
 * @overview: Reading methods for oops
 * @author  : surendra 
 * @version : 1.0
 * @since   : 04/01/2019 
 ****************************************************************************************/
var filestream = require('fs');
var readline = require('readline-sync');
var prompt = require('prompt-sync')();
module.exports = {// modules exporting 
    inventory(object) {// inventory method
        /**
         *  declaring varaibles and definig with object
         */
        var rice = object.rice;
        var wheat = object.wheat;
        var pulses = object.pulses;
        for (var key in rice) {
            /**
             * for in loop it will through the properties of  rice objects 
             */
            console.log('\n');
            console.log("The total price of rice in type of ", rice[key].riceName, " is ", rice[key].weight * rice[key].price);
            /**
             * calculating the diifferent types of rices through weight and price and printing the result
             */
        }
        for (var key in wheat) {
            /* 
             * for in loop it will through the properties of  wheat objects
             */
            console.log('\n');

            console.log("The total price of wheat in type of", wheat[key].wheatName, " is ", wheat[key].weight * wheat[key].price);
            /*
            calculating the different type of  wheats  through weight and price and printing the result
            */
        }
        for (var key in pulses) {
            /**
             * for in loop it will through the properties of  pulses objects 
             */
            console.log('\n');
            console.log("the total price of pulse in type of ", pulses[key].pulseName, " is ", pulses[key].weight * pulses[key].price);
            /**
             * calculating the different type of  pulses through weight and price and printing the result
             */
        }
    },
    /*
        *@Purpose : To print the message with replaced string through regulgar expression
        *@Description : in the message replaced with newstrings and prin the date and modified message
        * */
    regexExpression() {
        /**
         * intializing varaibles
         */
        var stringOne = "Hello <<name>> we have your fullname as <<full name>> in our database."
        var stringThree = " <<91-xxxxxxxxxx>> is your contact number"
        var date = "Thank you BridgeLabz <<dd-mm-yyyy>> ."
        /**
         * using regular expression rules and assigning limits for varaibles like mobileNumber and name
         */
        nameRestriction = /[a-z]/ig;
        mobileNumberRestriction = /[0-9]/g;
        /**
         * declaring name varaible and checking nameRestriction and length through if condition 
         */
        var name = prompt("Enter your name ");
        if (nameRestriction.test(name) && name.length > 3) {
            name1 = stringOne.replace(/<<name>>/, name);
        }
        else {
            console.log("invalid ")
        }
        /**
        * declaring fullName varaible and checking nameRestriction and length through if condition 
        */
        var fullName = prompt("Enter your Full name");
        if (nameRestriction.test(fullName) && fullName.length > 3) {
            fullName = name1.replace(/<<full name>>/, fullName);
        }
        else {
            console.log("invalid ")
        }
        /**
        * declaring mobileNumber varaible and checking mobileNumberRestriction and length through if condition 
        */
        var mobileNumber = prompt("Enter your Mobile number");
        if (mobileNumberRestriction.test(mobileNumber) == true && mobileNumber.length == 10) {
            mobileNumber = stringThree.replace(/<<91-xxxxxxxxxx>>/, mobileNumber);
        }
        else {
            console.log("invalid ")
        }
        /**
         * creating date object and printing the result through the conditions
         */
        console.log(fullName + " " + mobileNumber);
        var dateresult = new Date();
        var answer = dateresult.getDate() + "/" + (dateresult.getMonth() + 1) + "/" + dateresult.getFullYear();
        date1 = date.replace(/<<dd-mm-yyyy>>/, answer);
        console.log(date1);
    },
    /*
        *@Purpose : >  Print a Stock Report with total value of each Stock and the total value of Stock.
    
        *@Description : Calculate the value of each stock and the total value and Print the Stock Report.
        */
    stockExpression(data) {
        /**
         * declaring varaible
         */
        var stock = data.stock;
        for (var key in stock) {
            /* 
             * for in loop it will through the properties of stock objects 
             */
            console.log(stock[key]);
            console.log("The total value of " + stock[key].stock_name + " is " + stock[key].Number_of_shares * stock[key].share_price);
            /*
          calculating the different type of stocks  through number of shares and share prices price and printing the result
          */
            console.log('\n');
        }
        var newstock = 0;
        for (var key in stock) {
            newstock = parseInt(newstock) + parseInt(stock[key].Number_of_shares * stock[key].share_price);
        }
        console.log("The total value of all stocks are  " + newstock);

    },

}




