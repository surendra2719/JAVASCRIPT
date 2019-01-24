
/*************************************************************************************************
 *  @Purpose        : To create a proper address book to store new address informations           
 *  @file           : address.js
 *  @overview       : Add new entries each time and manage that address book and perform opeartions
                      like add,delete,search,update and sort information.
 *  @author         : surendra
 *  @version        : 1.0
 *  @since          : 18-01-2019
 ***************************************************************************************************/
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
            return false;
        }
        var lastName = prompt("Please enter your last name: ");
        /**
         * validating last name
         */
        if (nameRestriction.test(lastName) == false) {
            console.log("Invalid input");
            return false;
        }
        /**
         * add the address information
         */
        console.log("Information obtained in addressbook");
        var city = prompt("City: ");
        if (nameRestriction.test(city) == false) {
            console.log("Invalid city name");
            return false;
        }
        var state = prompt("State: ");
        if (nameRestriction.test(state) == false) {
            console.log("Invalid state name");
            return false;
        }


        var zip = prompt("Zip code: ");
        /**
         * zip code validation that should not exceed length 6
         */
        if (contactRestriction.test(zip) == false || zip.lenght <= 6) {
            console.log("Invalid zip code");
            return false;
        }
        var phoneNumber = prompt("Phone number: ");
        if (contactRestriction.test(phoneNumber) == false || phoneNumber.length != 10) {
            console.log("Invalid phone number");
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
                            switch (parseInt(choice3)) {
                                case 1:
                                    var cityUpdate = prompt("Enter the new city name: ");
                                    if (nameRestriction.test(cityUpdate) == false && cityUpdate.length > 3) {
                                        console.log("Invalid name!");
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
                            break;
                    }
                }
            } if (temp == -1) {
                /**
                 * check if name is available in json or not
                 */
                console.log("Profile unavailable!!Please create new one.");
                //address();
            }
        }
        else {
            console.log("No database to display and create a new database");
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
    }
}
addressBook()