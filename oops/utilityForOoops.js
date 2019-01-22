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
        var stock = data.stock;
        /**
   * declaring varaible and through that varaible accessing the stock
   */
        for (var key in stock) {
            /* 
          * for in loop it will through the properties of stock objects 
          */
            console.log(stock[key]);
            console.log("The total value of " + stock[key].stock_Name + " is " + stock[key].number_Of_Shares * stock[key].share_Price);
            /*
        calculating the different type of stocks  through number of shares and share prices price and printing the result
        */
            console.log('\n');
        }
        var newStock = 0;
        for (var key in stock) {
            newStock = parseInt(newStock) + parseInt(stock[key].number_Of_Shares * stock[key].share_Price);
        }
        console.log("The total value of all stocks are  " + newStock);

    },
    inventManagement(data) {
        /**
         * declaring varaible and choosing the option checking through if condition 
         */
        var answer = Number(readline.question(" press \n 1. To add \n 2. To delete \n 3. To display \n 4. To print \n 5.To exit "));
        if (answer == 1) {
            this.add(data);
        }
        else if (answer == 2) {
            this.remove(data);
        }
        else if (answer == 3) {
            this.disp(data);
        }
        else if (answer == 4) {
            this.print(data);
        }
        else if (answer == 5) {
            this.exit(data);
        }
        else {
            console.log("Invalid key/input ");
        }
    },
    /**
     * adding the stock by using push 
     * @param {data} data 
     */
    add(data) {
        try {/**
           * declaring varaibles
           */
            var name = readline.question("Enter the name of the share    ");
            if (!isNaN(name)) throw " invalid input"
            var share = readline.question("Enter the number of shares     ");
            if (isNaN(share)) throw " invalid input"
            var price = readline.question("Enter the price of your share ");
            if (isNaN(price)) throw " invalid input"
        }
        catch (err) {
            console.log(err)
        }
        /**
         * accessing the stock containig in json file
         */
        data.stock.push({
            stockName: name,
            noOfShare: share,
            sharePrice: price
        })
        /**
         * writing the data in json file
         */
        filestream.writeFileSync('inventoryManagem.json', JSON.stringify(data));
        this.inventManagement(data);

    },/**
     * removing the data containig in the json file by spilce method
     * @param {data} data 
     */
    remove(data) {
        access = data.stock;
        try {
            var answer = readline.question("Enter the stack name do you want delete");
            if (!isNaN(answer)) throw "invalid input"
        }
        catch (err) {
            console.log(err)
        }
        /**
         * generating for loop for deleting stock through index number and by spilce method
         */
        for (let i = 0; i < data.stock.length; i++) {
            if (data.stock[i].stockName == answer) {
                var index = data.stock.indexOf(data.stock[i]);

                data.stock.splice(index, 1);
            }

        }
        /**
              * writing the data in json file
              */
        filestream.writeFileSync('inventoryManagem.json', JSON.stringify(data));
        this.inventManagement(data);

    },
    /**
     * displaying the data containing in json file
     * @param {data} data 
     */
    disp(data) {
        console.log(data);
        this.inventManagement(data);
    },
    /**
     * @param {data} data
     *  printing the data containing in json file 
     */
    print(data) {
        var result = data.stock;
        console.log("The total price of your each share is ");
        for (var key in result) {
            console.log(result[key].stockName + " -->  " + result[key].noOfShare * result[key].sharePrice)
            /*
             calculating the different type of stocks  through number of shares and share prices price and printing the result
             */
        }
        this.inventManagement(data);
    },
    /**
     * for exiting
     */
    exit() {
        console.log(" Thank you ");
        return;
    },
    /*
      *@Purpose : >   Print the Player Cards received by each Player.
      *@Description : create a Player Object having Deck of Cards having ability to Sort by Rank
                      maintain the cards in a Queue implemented using Linked List
      */

    deckOfCards() {
        /**
         * accessing the queue and sort from there respective paths
         */
        var queue = require('../Datastructures/utilityForDataStructures/queueUsingLinedList');
        var sort = require('../Datastructures/utilityForDataStructures/utilityForProgram');
        /**
         * declaring varaibles and accessing queue linked list
         */
        var personOne = new queue.QueueLinked;
        var personTwo = new queue.QueueLinked;
        var personThree = new queue.QueueLinked;
        var personFour = new queue.QueueLinked;
        var suit = ["♣️", "🔸", "❤️", "♠️"];
        var rank = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];
        /**
         * declaring array and calculating the number of cards and pushing into array
         */
        var deck = new Array();
        var n = suit.length * rank.length;
        for (let i = 0; i < suit.length; i++) {
            for (let j = 0; j < rank.length; j++) {
                var temp = "";
                deck.push(suit[i] + rank[j] + "");
            }
        }
        /**
         * generating random method for shuffling cards containig in array
         */
        for (let i = 0; i < n; i++) {
            var random = parseInt(Math.random() * deck.length)
            var temp = deck[i];
            deck[i] = deck[random];
            deck[random] = temp;
        }
        /**
         * adding the set of cards though if condition by range through enqueue
         */
        var array = [];
        for (let i = 0; i < deck.length; i++) {
            if (i < 13) {
                personOne.enqueue(deck[i]);
            } else if (i < 26) {
                personTwo.enqueue(deck[i]);
            } else if (i < 39) {
                personThree.enqueue(deck[i]);
            } else {
                personFour.enqueue(deck[i]);
            }
        }
        /**
         * spilting the four persons cards in containig array
         */
        array = personOne.getData().split(' ');
        array2 = personTwo.getData().split(' ');
        array3 = personThree.getData().split(' ');
        array4 = personFour.getData().split(' ');
        /**
         * sorting the cards by insertion sorting through symbols containig in array
         */
        sort.insertion(arrayOne);
        sort.insertion(arrayTwo);
        sort.insertion(arrayThree);
        sort.insertion(arrayFour);
        /**
         * printing the result containing in array
         */
        console.log("Player 1 have this cards :  " + arrayOne.join());
        console.log("Player 2 have this cards :  " + arrayTwo.join());
        console.log("Player 3 have this cards :  " + arrayThree.join());
        console.log("Player 4 have this cards :  " + arrayFour.join());

    },  /*
    *@Purpose : >    Write a Program DeckOfCards,to initialize deck of cards having suit
    *@Description :  shuffle the cards using Random method and then distribute 9 Cards to 4 Players 
                    and Print the Cards the received by the 4 Players using 2D Array
    */
    deck2D() {
        /**
        * accessing the queue  from there respective path
        */
        var queue = require('../Datastructures/utilityForDataStructures/queue');
        /**
        * declaring varaibles and accessing queue
        */
        var queue = new queue.Queue;
        var suit = ["♣️", "🔸", "❤️", "♠️"];
        var rank = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];
        /**
        * declaring array and calculating the number of cards and pushing into array
        */
        var deck = new Array();
        var n = suit.length * rank.length;
        /**
       * declaring array and calculating the number of cards and pushing into array
       */
        for (let i = 0; i < suit.length; i++) {
            for (let j = 0; j < rank.length; j++) {
                var temp = "";
                deck.push(temp + rank[j] + " " + suit[i]);
            }
        }
        /**
     * generating random method for shuffling cards containig in array
     */
        for (let i = 0; i < n; i++) {
            var random = parseInt(Math.random() * deck.length)
            var temp = deck[i];
            deck[i] = deck[random];
            deck[random] = temp;
        }
        /**
       * adding the set of cards though for loop by range 
       */
        var arr = [[], [], [], []];
        var x = 0, y = 9
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 9; j++) {
                arr[i][j] = deck[j + x];
            }
            x = x + 9;
        }
        /**
       * printing the result containing in array
       */
        console.log(arr);

    },

}


