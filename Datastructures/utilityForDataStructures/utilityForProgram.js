
/*****************************************************************************************
 *purpose   : Acessing the  methods for   program

 
 * @file    : utilityForProgram.js
 * @overview: By this class it will provinding methods

 * @version : 1.0
 * @since   : 04/01/2019 
 ***************************************************************************/
var readline = require('readline-sync');
module.exports = {
    leapYear(year)   // ensure year is of four digit
    {
        if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) //condition for checking leap 
        {
            return true;
        }
        else {
            return false;
        }
    },
    dayOfWeek(day, month, year) {
        // formula 
        var y0 = year - Math.floor((14 - month) / 12);
        var x = y0 + Math.floor((y0 / 4)) - Math.floor((y0 / 100)) + Math.floor((y0 / 400));
        m0 = month + 12 * Math.floor((14 - month) / 12) - 2;
        var d0 = (day + x + Math.floor((31 * m0) / 12)) % 7;
        //console.log(d0);
        return d0;


    },
    isPrime(number)  // prime method for checking number is prime or not 
    {
        if (number == 0 || number == 1)  //  checking the number 
        {
            return false;
        }
        for (let index = 2; index < number; index++) // generating for loop for number
        {
            if (number % index == 0) {
                return false;
            }

        }
        return true;
    },

    isAnagram(string1, string2)  // method for checking anagram 
    {
        string1 = string1 + "";
        string2 = string2 + "";

        if (string1.length != string2.length) {
            return false;
        }
        var arr = [];

        for (let index = 0; index < 36; index++) {
            arr[index] = 0;

        }


        for (let index = 0; index < string1.length; index++)  // checking string 1 with integers asci values 
        {
            var ch = string1.charAt(index);
            if (ch >= 'a' && ch <= 'z') {
                var code = ch.charCodeAt(0);

                arr[code - 97]++;
            } else if (ch >= 'A' && ch <= 'Z') {
                var code = ch.charCodeAt(0);
                arr[code - 65]++;
            } else {
                var code = ch.charCodeAt(0);
                arr[code - 22]++;
            }

            ch = string2.charAt(index); //  checking the string 2 values with integers asci values 
            if (ch >= 'a' && ch <= 'z') {
                var code = ch.charCodeAt(0);

                arr[code - 97]--;
            } else if (ch >= 'A' && ch <= 'Z') {
                var code = ch.charCodeAt(0);
                arr[code - 65]--;
            } else {
                var code = ch.charCodeAt(0);
                arr[code - 22]--;
            }


        }
        for (let index = 0; index < 36; index++)
        //  generating loop for arrays for boolean 
        {
            if (arr[index] != 0) {
                return false;
            }
        }
        return true;
    }



}