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
        /*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
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
        arrayOne = personOne.getData().split(' ');
        arrayTwo = personTwo.getData().split(' ');
        arrayThree = personThree.getData().split(' ');
        arrayFour = personFour.getData().split(' ');
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
        console.log("Player 1 have this cards :  " + arrayOne.join())
        console.log("Player 2 have this cards :  " + arrayTwo.join());
        console.log("Player 3 have this cards :  " + arrayThree.join());
        console.log("Player 4 have this cards :  " + arrayFour.join());

    },  /*
    *@Purpose : >    Write a Program DeckOfCards,to initialize deck of cards having suit
    *@Description :  shuffle the cards using Random method and then distribute 9 Cards to 4 Players 
                    and Print the Cards the received by the 4 Players using 2D Array
    */
    deck2D() {

        var suit = ["♣️", "🔸", "❤️", "♠️"];
        var rank = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];
        /**
        * declaring array and calculating the number of cards and pushing into array
        */
        var deck = [];
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
    clinicManagement(data) {
        /**
         * accessing data of doctor and patient from JSON file through declaring varaibles
         */
        var doctor = data.Doctor;
        var patient = data.Patient;
        /**
         * declaring answer varaible for user input choice
         */
        var answer = Number(readline.question("Press 1 to search doctor \n and press 2 to search patient"));
        {
            if (answer == 1) {
                let information = readline.question("Press \n 1. to search doctor by his name \n 2. by ID ,\n 3.by Specialization ");
                if (information == 1) {
                    
                    try {
                        var doctorName = readline.question("Enter the name of doctor ");
                        if (isNaN = doctorName) throw "invalid input please enter data correctly containing in doctors list"
                    }
                    catch (err) {
                        console.log(err)
                    }
                    /**
                     * taking input by user 
                     * generating for in loop and checking through if condition
                     * printing the result 
                     */
                    for (var key in doctor) {
                        if (doctor[key].name == doctorName) {
                            console.log("your doctor information");
                            console.log(doctor[key]);
                        }
                    }
                    this.appointment();
                }
                else if (information == 2) {
                    try {
                        var doctorIdNumber = readline.question("Enter the ID of doctor ");
                        if (isNaN = doctorIdNumber) throw "invalid input please enter data correctly containing in doctors list"
                    }
                    catch (err) {
                        console.log(err)
                    }   /**
                    * taking input by user 
                    * generating for in loop and checking through if condition
                    * printing the result 
                    */
                    for (var key in doctor) {
                        if (doctor[key].Id == doctorIdNumber) {
                            console.log("your doctor information");
                            console.log(doctor[key]);
                        }
                    }
                    this.appointment();
                }
                else if (information == 3) {
                    try {
                        var doctorSpecilization = readline.question("Enter the Specialization of doctor ");
                        if (isNaN = doctorSpecilization) throw "invalid input please enter data correctly containing in doctors list"
                    }
                    catch (err) {
                        console.log(err)
                    }   /**
                    * taking input by user 
                    * generating for in loop and checking through if condition
                    * printing the result 
                    */
                    for (var key in doctor) {
                        if (doctor[key].Specialization == doctorSpecilization) {
                            console.log("your doctor information");
                            console.log(doctor[key]);
                        }
                    }
                    this.appointment();
                }
                else {
                    console.log("Enter valid input");
                    this.clinicManagement(data);
                }
            }
            else if (answer == 2) {
                let information = readline.question("Press \n 1. to search patient by his name \n 2. by ID ,\n 3.by Mobile number ");
                if (information == 1) {
                    try {
                        var patientName = readline.question("Enter the name of Patient ");
                        if (isNaN = patientName) throw "invalid input please enter data correctly containing in patients list"
                    }
                    catch (err) {
                        console.log(err)
                    }   /**
                    * taking input by user 
                    * generating for in loop and checking through if condition
                    * printing the result 
                    */
                    for (var key in patient) {
                        if (patient[key].name == patientName) {
                            console.log("your Patient information");
                            console.log(patient[key]);
                        }
                    }
                }
                else if (information == 2) {
                    try {
                        var patientIdNo = readline.question("Enter the Id of Patient ");
                        if (isNaN = patientIdNo) throw "invalid input please enter data correctly containing in patients list"
                    }
                    catch (err) {

                        console.log(err)
                    }   /**
                    * taking input by user 
                    * generating for in loop and checking through if condition
                    * printing the result 
                    */
                    for (var key in patient) {
                        if (patient[key].Id == patientIdNo) {
                            console.log("your Patient information");
                            console.log(patient[key]);
                        }
                    }
                }
                else if (information == 3) {
                    try {
                        var patientMobileNumber = readline.question("Enter the mobile number of Patient ");
                        if (isNaN = patientMobileNumber) throw "invalid input please enter data correctly containing in patients list"
                    }
                    catch (err) {

                        console.log(err)
                    }   /**
                    * taking input by user 
                    * generating for in loop and checking through if condition
                    * printing the result 
                    */
                    for (var key in patient) {
                        if (patient[key].Contact_number == patientMobileNumber) {
                            console.log("your Patient information");
                            console.log(patient[key]);
                        }
                    }
                }
                /**
                 * validating
                 */
                else if (inf == 4) {
                    return;
                }
                else {
                    console.log("Enter the valid input")
                }
            }
            else {
                console.log("Enter valid input")
            }
        }

    },
    appointment(data, doctor) {

    },
  
    addressBook() {
        var prompt = require('prompt-sync')();
        var fs = require('fs');
        var data = fs.readFileSync('/home/bridgelabz/surendra/oops/addressBook.json');
        var addressData = JSON.parse(data);
        /**
         * regex
         */
        nameRestriction = /[a-z]/ig;
        contactRestriction = /[0-9]/g;
        /**
         * Add new entries each time and manage that address book and perform opeartions like add,delete,
         * search,update and sort information.
         * @param person store the info of each person and perform opeartions.
         */
        class Address {
            /**
             * create a constructor to initialize and store values
             */
            constructor(addressData) {
                this.addressData;
            }
            createAddress() {
                var name = prompt("Please enter your first name: ");
                if (nameRestriction.test(name) == false) {
                    console.log("Invalid input");
                    this.createAddress()
                    return false;

                }

                var lastName = prompt("Please enter your last name: ");
                /**
                 * validating last name
                 */
                if (nameRestriction.test(lastName) == false) {
                    console.log("Invalid input");
                    this.createAddress()
                    return false;
                }
                /**
                 * add the address information
                 */
                console.log("Information obtained in addressbook");
                var city = prompt("City: ");
                if (nameRestriction.test(city) == false) {
                    console.log("Invalid city name");
                    this.createAddress()
                    return false;
                }
                var state = prompt("State: ");
                if (nameRestriction.test(state) == false) {
                    console.log("Invalid state name");
                    this.createAddress()
                    return false;
                }


                var zip = prompt("Zip code: ");
                /**
                 * zip code validation that should not exceed length 6
                 */
                if (contactRestriction.test(zip) == false || zip.lenght <= 6) {
                    console.log("Invalid zip code");
                    this.createAddress()
                    return false;
                }
                var phoneNumber = prompt("Phone number: ");
                if (contactRestriction.test(phoneNumber) == false || phoneNumber.length != 10) {
                    console.log("Invalid phone number");
                    this.createAddress()
                    return false;
                }
                /**
                 * push each value into json
                 */
                addressData.Person.push({
                    "Name": name,
                    "LastName": lastName,
                    "Address": {
                        "City": city,
                        "State": state,
                        "Zip": zip,
                        "PhoneNum": phoneNumber
                    }
                })
                /**
                 * write file into json
                 */
                fs.writeFile('addressBook1.json', JSON.stringify(addressData), 'utf-8', function (err) {
                    if (err) throw err
                    console.log('Done!');
                })
                this.createAddress()
                console.log("Address updated ");
                console.log("Your information as per our record is: \r\n First Name: " + name + "\r\nLast Name: " + lastName + "\r\nCity: " + city + "\r\nState: " + state);
            }
            /**
             * comaparing name of each object and sort alphabetically
             */
            compare(a, b) {
                if (a.Name.toLowerCase() < b.Name.toLowerCase()) {
                    return -1;
                }
                if (a.Name.toLowerCase() > b.Name.toLowerCase()) {
                    return 1;
                }
                return 0;
            }
            sorting() {
                console.log(addressData.Person.sort(this.compare));
            }
            /**
             * open profile for given name
             */
            openProfile() {
                var temp = -1;
                console.log(addressData.Person);

                if (addressData.Person.length > 0) {
                    for (var i = 0; i < addressData.Person.length; i++) {
                        console.log(addressData.Person[i]);
                    }
                    console.log("Welcome!!");
                    var update = prompt("Please enter the name of profile: ");
                    for (var k = 0; k < addressData.Person.length; k++) {
                        if (update == addressData.Person[k].Name) {
                            temp = k;
                            console.log("What you want to do?");
                            console.log("1: Update");
                            console.log("2: Delete");
                            console.log("3: Sort");
                            console.log("4: Save");
                            console.log("5: Exit");
                            var choice2 = prompt("Please enter your choice: ");
                            switch (parseInt(choice2)) {
                                case 1:
                                    /**
                                     * update profile
                                     */
                                    console.log("update what you required ");
                                    console.log("1: City");
                                    console.log("2: State");
                                    console.log("3: Zip code");
                                    console.log("4: Phone");
                                    console.log("5: Exit");

                                    var choice3 = prompt("Please enter your choice: ");
                                    try {
                                        if (isNaN(update)) throw "invalid"
                                    }
                                    catch (err) {
                                        console.log(err)
                                    }

                                    switch (parseInt(choice3)) {
                                        case 1:
                                            var cityUpdate = prompt("Enter the new city name: ");
                                            if (nameRestriction.test(cityUpdate) == false && cityUpdate.length > 3) {
                                                console.log("Invalid name!");
                                                this.openProfile()
                                                return false;
                                            }
                                            var obj = {
                                                "Name": addressData.Person[k].Name,
                                                "LastName": addressData.Person[k].LastName,
                                                "Address": {
                                                    "City": cUpdate,
                                                    "State": addressData.Person[k]["Address"].State,
                                                    "Zip": addressData.Person[k]["Address"].Zip,
                                                    "PhoneNum": addressData.Person[k]["Address"].phoneNumber
                                                }
                                            }
                                            addressData.Person[k] = obj;
                                            save();
                                            break;
                                        case 2:
                                            var statetUpdate = prompt("Enter the new state name: ");
                                            if (nameRestriction.test(statetUpdate) == false && statetUpdate.length > 3) {
                                                console.log("Invalid name!");
                                                this.openProfile()
                                                return false;
                                            }
                                            var obj = {
                                                "Name": addressData.Person[k].Name,
                                                "LastName": addressData.Person[k].LastName,
                                                "Address": {
                                                    "City": addressData.Person[k]["Address"].City,
                                                    "State": statetUpdate,
                                                    "Zip": addressData.Person[k]["Address"].Zip,
                                                    "PhoneNum": addressData.Person[k]["Address"].phoneNumber
                                                }
                                            }
                                            addressData.Person[k] = obj;
                                            save();
                                            break;

                                        case 3:
                                            var zipUpdate = prompt("Enter the new zip code: ");
                                            if (contactRestriction.test(zipUpdate) == false) {
                                                console.log("Invalid number!");
                                                this.openProfile()
                                                return false;
                                            }
                                            var obj = {
                                                "Name": addressData.Person[k].Name,
                                                "LastName": addressData.Person[k].LastName,
                                                "Address": {
                                                    "City": addressData.Person[k]["Address"].City,
                                                    "State": addressData.Person[k]["Address"].State,
                                                    "Zip": zipUpdate,
                                                    "PhoneNum": addressData.Person[k]["Address"].phoneNumber
                                                }
                                            }
                                            addressData.Person[k] = obj;
                                            save();
                                            break;
                                        case 4:
                                            var phoneNumbewrUpdate = prompt("Enter the new phone number: ");
                                            if (contactRestriction.test(phoneNumbewrUpdate) == false || phoneNumbewrUpdate.length != 10) {
                                                console.log("Invalid number!");
                                                this.openProfile()
                                                return false;
                                            }
                                            var obj = {
                                                "Name": addressData.Person[k].Name,
                                                "LastName": addressData.Person[k].LastName,
                                                "Address": {
                                                    "City": addressData.Person[k]["Address"].City,
                                                    "State": addressData.Person[k]["Address"].State,
                                                    "Zip": addressData.Person[k]["Address"].Zip,
                                                    "PhoneNum": phoneNumbewrUpdate
                                                }
                                            }
                                            addressData.Person[k] = obj;
                                            save();
                                            break;
                                        case 5:
                                            console.log("ThankYou");
                                            //address();
                                            break;
                                    }
                                    break;
                                case 2:
                                    /**
                                     * to delete profile
                                     */
                                    var update = prompt(" enter index  want to delete: ");
                                    if (update != isNaN) {
                                        console.log("invalid input ")
                                        this.openProfile()
                                    }

                                    delete addressData.Person[update];
                                    for (var k = 0; k < addressData.Person.length; k++) {
                                        if (addressData.Person[k] == null) {
                                            addressData.Person.splice(k, 1);
                                        }
                                    }

                                    /**
                                     * write file
                                     */
                                    fs.writeFile('address.json', JSON.stringify(addressData), 'utf-8', function (err) {
                                        if (err) throw err
                                        console.log('Done')
                                    })
                                    break;
                                case 3:
                                    /**
                                     * sort the profile by name
                                     */
                                    this.sorting();
                                    save();
                                    break;
                                case 4:
                                    /**
                                     * save file into json
                                     */
                                    function save() {
                                        fs.writeFile('aaddress.json', JSON.stringify(addressData), 'utf-8', function (err) {
                                            if (err) throw err
                                            console.log('saved')
                                        })
                                    }
                                    save();
                                    break;
                                case 5:
                                    console.log("ThankYou");
                                    //address();
                                    break;
                                default:
                                    console.log(" enter valid input");
                                    this.openProfile()
                                    break;
                            }
                        }
                    } if (temp == -1) {
                        /**
                         * check if name is available in json or not
                         */
                        console.log("Profile unavailable!!Please create new one.");
                        this.openProfile()
                        //address();
                    }
                }
                else {
                    console.log("No database to display and create a new database");
                    this.openProfile()
                    this.createAddress();
                }
            }
        }
        /**
         * creating a function to perform main opeartions such as create,open profile
         */
        function addressBook() {
            var a = new Address();
            console.log("ADDRESS BOOK");
            console.log("1:Create database");
            console.log("2:Open Address Book");
            console.log("3:Exit");

            var choice1 = prompt("enter your choice: ");
            switch (parseInt(choice1)) {
                case 1:
                    a.createAddress();
                    break;
                case 2:
                    a.openProfile();
                    break;
                case 3:
                    console.log("ThankYou");
                    break;
                default:
                    console.log(" enter valid input ");
                    addressBook()

            }

        }
        addressBook()

    }
}
