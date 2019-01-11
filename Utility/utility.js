
/******************************************************************************
 *  Execution       :   1. default node         cmd> node Utility.js 
 *                      
 * 
 *  Purpose         : TO deploy all the busness logic.
 * 
 *  @description    
 * 
 *  @file           : Utility.js
 *  @overview       : ALl the business logic bus be here.
 *  @module         : read-line modules are installed
 *  @author         : SURENDRA KUMAR
 *  @version        : 10.0
 *  @since          : 04-01-2019
 *
 ******************************************************************************/
const readline = require('readline-sync');

/*
*@purpose : To get user input value 
*@description : call this method whenever we want take input from user
                and return the value.
*/
module.exports = {

    /*
     * Purpose   : By ensuring username with minimum 3 characters,replacing USERNAME with userinput
     *             and print the string.
     */

    /*
     *  Descriptipn: Declaring the function and passing the userinput as argument.
     *  Function: diplayname takes the userinput and print it with some sentence.
     */
    replace(user) {
        if (user.length >= 3) {
            console.log(" hello " + user + " how are you ");

        }
        else {
            console.log("enter the characters more than three");
        }

    },

    /* Purpose : By using random function flip the coin no of times from user input
    *            and print the percentage of head vs tails
    */

    /*
     * Description : Declaring a function and passing the userinput for fliping the coin
     *                no of times
     * Function: coinflip takes the no of times to flip coin and print the percentage of
     *            head and tail
     */
    flip(rn) {
        var tails = 0;
        var heads = 0;
        var flip = readline.question("enter the number of times to flip the coin");

        for (var i = 1; i <= flip; i++) {
            var a = readline.question("press any key ");
            var rn = Math.floor(Math.random() * 2);
            if (rn == 1) {
                heads++;
                console.log(rn);
            }
            else {
                tails++;
                console.log(rn);

            }
        }
        console.log("the percent of heads is " + (heads / flip) * 100 + "%");
        console.log("the percent of tails is " + (tails / flip) * 100 + "%");
        console.log(heads);
        console.log(tails);
    },
    /* 
   * purpose : By taking power values as input and display the given power value 
   *            is a leapyear or not , the given power value doesnt exceed 31
   */

    /*
     * Description : Declaring a function and giving power value N as argument  
     * Function : power function takes the value N,checks the given number is less than 31 
     *             and prints the given value is a leap year or not
     */
    Leapyear(yr) {
        var yr = readline.question("enter year to check whether it is leap year or not");
        if (yr.length >= 4) {
            if (yr % 4 == 0) {
                console.log(yr + " is leap year");
            }
            else {
                console.log(yr + " is  not leap year");
            }


        }
    },
    /*
   *@purpose : generate the power of two values 
   *@param   : user input value
   *@description : it prints the two's power value 
   * */
    power(p) {
        var p = readline.question("enter the power");
        if (p == 0) {
            console.log(1);
        }
        for (var i = 1; i <= p; i++) {
            console.log(Math.pow(2, i));
        }
    },
    /*GAMBLER*/
    /*
    * @purpose : is to calculate the total number of wins and percentage of wins and loss

    * @parameter   : goal - amount that player want to win 
    *
    * @description : the game continue upto, if player reached his goal,
    *               or he lost all his money or he lost his total number of times he want play.
    */
    Gambler(goal) {


        var goal = readline.question("enter the goal ");

        var win = 0;
        var loose = 0;
        var toss = 0;
        var amount = 0;
        //loop upto win and lost his all stack and upto total number of times he wants play 
        while (amount < goal) {
            toss++;
            var b = readline.question("Enter your betting number 1 to 6");


            readline.question("press any key to toss ");
            // genearate the random number to check weather he wins or lost
            var r = Math.floor(Math.random() * 6 + 1);
            if (b == r) {
                win++;
                amount = amount + r;
                console.log(amount);
            }
            if (amount > goal) {
                amount = amount - r;
                console.log(amount);
            }
            else {
                loose++;
                console.log(amount);
            }

        }
        // calculating the total percentage 
        var pw = (win * 100) / toss;
        var pl = (loose * 100 / toss);


        console.log("win percentage out of toss is " + pw);
        console.log("loose percentage out of toss " + pl);

        // show  user to all the values 
        console.log("win==========>" + win);
        console.log("loose========>" + loose);
        console.log("amount========>" + amount);
        console.log("toss===========>" + toss);



    },
    /* 
    * @purpose : To genarate harmonic numbers according to the userinput
    *@param    : input from user
    * @description : To generate the sum of harmonic numbers by taking input from user
    * @function : Harmonic function takes user input and sum it no of times that user given
    */
    Harmonic(n) {
        var n = readline.question("enter nth number")
        var sum = 0;
        // loop for generate the Nth Harmonic value
        for (var i = 1; i <= n; i++) {
            sum = sum + 1 / i;
        }
        console.log("nth harmonic number is" + sum);
    },/*
    *@purpose :to find coupon from user input array elements
    *@parameter   :array elememts ,varaible c
    * @Description :Given N distinct Coupon Numbers, how many random numbers do you need to generate distinct coupon number? This program simulates this random process.

    */
    coupun(c) {
        var array = [];
        for (var i = 0; i < c; i++)
        // genearate the random number
        {
            array[i] = Math.floor(Math.random() * 9 + 1);
            for (var j = 0; j < i; j++) {
                if (array[i] == array[j]) {
                    i--;
                }

            }
        }
        return array;
    },
    /*
*@purpose : to calculate the distance between two point.
*@parameter   : a-first distance 
*@parameter   : b -Second distance 
*@description : use distance formula and calculate the result 
*/
    Distance(Distance) {

        var a = readline.question(" enter the value of a ");
        var b = readline.question(" enter the value of b ");

        var Distance = Math.sqrt(((Math.pow(a, 2)) + (Math.pow(b, 2))));

        console.log("distance between  point" + a + "and" + b + "and origin is" + Distance);


    },
    /* 
  * @purpose : To genarate primeFactor numbers according to the userinput
  */

    /* @description : Finding the primefactors of a given number */
    Prime(n) {
        var n = readline.question("enter the n value");
        for (var i = 1; i <= n; i++) {
            var count = 0;
            for (var j = 1; j <= i; j++) {
                if (i % j == 0) {
                    count++;
                }
            }

            if (count == 2) {
                while (n % i == 0) {
                    console.log(i);
                    n = n / i;

                }
            }


        }
    },/*
    *@purpose : To calculate the Quadartic roots using user input value.
    *@parameter   : a-first element
                b-second element
                c-third element
    *@description : calculate the roots by using the formula and
                    prints all possible roots.
    */
    quad(a, b, c) {
        var a = readline.question("enter the value of a");

        var b = readline.question("enter the value of b");
        var c = readline.question("enter the value of c");
        // calculate the d(variable) value
        var d = Math.sqrt(b * b - 4 * a * c);
        //check d value 
        var denom = 2 * a;
        //calculate the roots 

        var r1 = (-b + d) / denom;
        var r2 = (-b - d) / denom;
        // roots are real and unequal
        console.log(" first root of equation is " + r1);
        console.log(" second root of equation is " + r2);
    }, /*
    *@purpose :to find triplets from user input array elements
    *@parameter   :array elements
    * @Description :if sum of 3 array elemets equals to zero its called triplet
    *prints the total triplets formed and also no of triplets 
    */
    Triplet(arr) {

        for (var i = 0; i < arr.length - 2; i++)
            for (var j = i + 1; j < arr.length - 1; j++)
                for (var k = j + 1; k < arr.length; k++)

                    // check sum of three elements are equals to zero
                    if (arr[i] + arr[j] + arr[k] == 0) {
                        console.log("sum of three numbers " + arr[i] + " " + arr[j] + " " + arr[k])
                    }

    },/*
    *@Purpose : To generate the Array 
    *@Description : this method is used to generate the array of user choice elements
                    and return the resultant array
    *@Parameter : empty array.
    */
    Arrayinput(array) {
        var num = readline.question("enter the size");
        for (var i = 0; i < num; i++) {
            array[i] = Number(readline.question(" "));
        }
        return array;
    },

    /*
        *@Purpose : To generate the Arraystring 
        *@Description : this method is used to generate the array of user choice elements
                        and return the resultant array
        *@Parameter : empty arraystring
        */
    ArrayinputStr(array) {
        var num = readline.question("enter the size");
        for (var i = 0; i < num; i++) {
            array[i] = readline.question("");
        }
        return array;
    },
    /*
    *@purpose :to find the windchill, by using user input temperature and volume
    * @parameter  : temp-temperature from the user input
    *           vol-volume from the user input 
    *  @description :first check the input for temperture is in range 
    *   and for the volume range, and prints the results
    * */

    //cheking condition for the required range 

    Windchil(t, v) {

        var t = readline.question("enter the value of t");
        var v = readline.question("enter the value of v");
        //Formula for the Windchill calculation 
        var w = 35.74 + 0.6215 + (0.4275 * t - 35.75) * Math.pow(v, 0.16);
        console.log("temparature is " + t);
        console.log("windspeed is " + v);

        console.log("windchill is " + w);



    },/*
    *@purpose : to get the time in seconds 
    *@Description : create object of Date and get time in seconds by using inbuild function
    */
    gettime() {
        var date = new Date();
        var n = date.getTime();
        return n;
    },/*@purpose : to get the time in seconds 
    *@parameter : start-when execution start
    *@parameter : stop - when execution stop
    *@Description : create object of Date and get time in seconds by using inbuild function
    */
    stopwatch(start, stop) {

        var time = stop - start;
        var div = time / 1000;
        return div;

    }, /*
    *@purpose :to find the permutation of given string and prints all combination
    *@parameter   : string-empty 
                str-user input string 
                first-first index
                last-last index
    *@description :check all possible combination of string 
    *use recursion method to find possible combination
    *prints the all combination
    */

    permut(b) {
        var input = readline.question("string");
        var outputstring;
        if (b === 0) {
            return b;
        }
        if (b === 1) {
            return b;
        }
        else {
            for (var i = 0; i < b.length; i++) {

            }

        }
    },
    permutation(string, str, first, last) {
        if (first == last) {
            console.log(str);
            string = string + str;
        }
        else {
            for (let index = first; index <= last; index++) {
                //call swapstring method swap the characters 
                str = this.swapString(str, first, index);

                string = this.permutation(string, str, first + 1, last);
                // recursion method 
                str = this.swapString(str, first, index);

            }
        }
        return string;
    },
    // swap method for swaping the string character
    swapString(str, first, last) {
        var as = '';
        //empty array
        var ch = [];
        //split string into the character
        ch = str.split('');
        // temporary variable
        var temp = ch[first];
        ch[first] = ch[last];
        ch[last] = temp;
        for (let index = 0; index < str.length; index++) {
            as = as + ch[index];
        }
        return as;
    },
    /*
       *@purpose :to print Two Dimensional Array,from user input elements 
       *@parameter   : row-number of rows 
                   column-number of columns
       *@Description :ask user to enter total number of column and row
       *convert into two Dimenstional array format and prints 
       */
    twoDarry(r, c) {

        var array = [];
        console.log("enter elements ");
        //to generate the multi-dimensional array

        for (let i = 0; i < r; i++) {
            array.push([]);
            // adding elements by elements in generated array
            for (let i2 = 0; i2 < c; i2++) {
                array[i][i2] = readline.question('');
            }
        }
        return array;
    },
    //Algorithm Programs
    /*
    *@Purpose : to find day falls on the given user input date format
    *@parameter   : day-take date from command line of user choice 
    *           month-take month from command line of user choice
    *           year- take year from command line of user choice
    *@Description : use formula and calculate the day 
    */
    dayOfWeek(d, m, y) {   //Formulas for caluclating dayofWeek
        var y0 = y - Math.floor((14 - m) / 12);
        var x = y0 + Math.floor((y0 / 4)) - Math.floor((y0 / 100)) + Math.floor((y0 / 400));
        m0 = m + 12 * Math.floor((14 - m) / 12) - 2;
        var d0 = (d + x + Math.floor((31 * m0) / 12)) % 7;
        console.log(d0)
        return d0;


    },
    sort(string) {
        var character = string.split('')
        for (var i = 0; i < character.length; i++);
        for (var j = i + 1; j < character.length; j++);
        {
            var temp = character[i];
            character[1] = character[2];
            character[2] = temp;
        }

    },/*
    *@Purpose : check the two strings are same or not
    *@Parameter   : str1-first string of user input 
    *           str2-second string of user input 
    *@Description : take two string from user and compare those, and prints the message 
                   wheather they are anagram or not.
    */
    anagram(string1, string2) {//checking the length of the both string 
        if (string1.length != string2.length)
            return false;


        var character = this.sort(string1);
        var character1 = this.sort(string2);
        //Comparing Two Characters
        if (character == character1) {
            console.log("strings are anagram");
        }
        else {
            console.log("strings are not anagram");
        }
    }, /*
    *@Purpose :Take a range of 0 - 1000 Numbers and find the Prime numbers in that range. 

    *@Parameter : n user input value
    *@Description :take value from the user and calculate the  prime number 
    *and prints the result.
    */

    prime(n) {
        var n = readline.question("enter n value");
        for (var i = 1; i < n; i++) {
            p = 0;
            for (var j = 2; j < i; j++) {
                if (i % j == 0) {
                    p++;
                    break;
                }
            }
            if (p == 0) {
                console.log(i + " ");
            }
        }

    },  /*
    *@Purpose: to find the monthly-payment and prints the results 
    *@Parameter  : principle-principle value from commandline
    *          year-year value from command line
    *          rate- rate value from command line
    *@Description : take command line input of principle and year and rate 
    *and find the monthly payment 
    */
    monthlypack(p, y, r) {        //formula to calculate the result
        var r0 = r / (12 * 100);
        var n = 12 * y;
        var payment = p * r0 / (1 - Math.pow(1 + r, -n));
        var calculation = (p * r) / (1 - (payment))
        console.log("The monthly payment " + calculation);
    },    /*
    *@Purpose: convert the celsius to fahrenheit and vice versa of user choice conversion
    *@Parameter  : number-user choice 
    *@Description: ask users wish, weather to celsius to fahrenheit or fahrenheit to celsius 
    *and convert according to his wish and prints the results.
    */
    temparature(choice) {

        if (choice == 1) {
            var temparature = readline.question("enter temparature in celcius");
            //formula
            var converted = (9 / 5.0 * (temparature) + 32);
            console.log("converted temparature in f" + converted)
        }

        else if (choice == 2) {
            var temparature = readline.question("enter temparature in fahrenheit");
            //formula
            var converted = 5 / 9.0 * (temparature - 32);
            console.log("converted temparature in c" + converted)
        }
        else {
            console.log("entered input is wrong ")
        }
    },
    /*
    *@Purpose :to find square root for non negative number by using the newton method 
    *@Parameter : n user input value
    *@Description :take value from the user and calculate the square of that number 
    *and prints the result.
    */

    squarenon(n) {
        if (n > 0) {
            var t = n;
            //formula 
            var epsilon = 1e-15;
            while (Math.abs(t - n / t) > epsilon * t) {
                t = ((n / t + t) / 2);
            }
            console.log("square root of number is" + t);

        }
        else {
            console.log("num should be positive num");
        }

    }, /*
    *@Purpose : is to dispence total minimum number of notes from vending machine 
    *@Parameter   : value-user inputed value
                i - zero
                TOTAL-zero
    *@Description : take a number from user and calculate minimum number of notes has to return 
                    vending machine use recursion method,and return the value  
    */
    vendingmachine(value, TOTAL, i) {/*
        *  array to store values of notes
        */
        var notes = [1000, 500, 100, 50, 20, 10, 5, 2, 1];
        /*
			 * Function to find the notes and print the output
			 * 
			 * @Parameter value the amount to which the note to despenced
			 */
        for (var i = 0; i < notes.length; i++) {



            if (Math.floor(value / notes[i] != 0)) {
                TOTAL = TOTAL + Math.floor(value / notes[i]);
                console.log(notes[i] + "rs notes " + Math.floor(value / notes[i]));
                value = value % notes[i];
            }

            if (value == 0) {
                console.log(" total notes " + TOTAL)
            }
        }
    }, /*
    *@Purpose : generate the binary search for given arrayofinteger
    *@Parameter   : res-array
                low-initial value of array
                high-final value of array
                ele-elements wants to find in arrayofinte
    *@Description: take array, calculate the mid value,compare with elements,use recursion method to search element  
    * */



    Binarysearch(array, element) {

        var low = 0;
        var high = arrrray.length - 1;
        while (low <= high) {
            // calculate middle value 
            middle = Math.floor((low + high) / 2);
            // check middle with element           
            if (element === array[middle]) {
                return middle;
            }
            else if (element < array[middle]) {
                //assign decremented middle to high 
                high = middle - 1;

            }
            else if (element > array[middle]) {
                low = middle + 1;
                //assign inremented middle to low
            }
            else {
                return middle;
            }
        }
        return -1;
    },  /*
    *@Purpose : generate the binary search for given array
    *@Parameter   : res-array
                low-initial value of array
                high-final value of array
                ele-elements wants to find in array
    *@Description: take array, calculate the mid value,compare with elements,use recursion method to search element  
    * */
    Binarysearchstr(array, element) {

        var low = 0;
        var high = array.length - 1;
        while (low <= high) {
            // calculate middle value 
            middle = Math.floor((low + high) / 2);
            // check middle with element

            if (element == array[middle]) {
                return middle;
            }
            else if (element < array[middle]) {
                //assign decremented middle to high 
                high = middle - 1;
            }
            else if (element > array[middle]) {
                //assign inremented middle to low
                low = middle + 1;
            }
            else {
                return middle;
            }
        }// if not found return -1
        return -1;
    },/*
    *@Purpose : generate the insertion sort array for given array
    *@Parameter   : res-array
    *@Description: take array,arrange elements according size using insertion sort,and return the result
    * */


    Insertionsort(array) {

        for (var i = 1; i < array.length; i++) {
            //temp varaible
            var temp = array[i];
            var j = i;
            while (j > 0 && temp < array[j - 1]) {
                array[j] = array[j - 1];
                j = j - 1;
            }
            array[j] = temp;
            // after sorting it will assign temp varaible to array
        }
        return array;

    }, /*
    *@Purpose : generate the bubble sort array  for given array
    *@Parameter   : res-array
    *@Description: take array,arrange elements according size using bubble sort,and return the result
    * */

    BubbleSort(array) {
        // compare first and next elements in array and arrange 
        for (let i = 0; i < array.length; i++) {
            for (let j = i + 1; j < array.length; j++) {

                if (array[i] > array[j]) {
                    var temp;
                    temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
            }
        }

        return array;
    },/*
    *@Purpose : To check the number wheather its palindrome or not 
    *@Parameter   : num-user input number 
    *@Description : take number from user input and check its palindrome or not 
    * */
    palindrome(number) {
        var temp = number;

        var rem = 0;
        //loop untill num is not equal to zero
        while (number != 0) {
            var r = number % 10;
            //take reminder of the number 
            rem = rem * 10 + r;
            //keep on adding element 
            number = Math.floor(number / 10);
            //devide the number to get next digit of given number  
        }// check both number are equal and return result
        if (rem == temp) {
            console.log(" it is pallindrome number  " + temp);
        }
        else {
            console.log(" it is not pallindrome number");
        }
    },
    swaping() {
        // x- decimal value
        var x = 2;
        // formula to return binay value using bitwise operator
        return (Math.floor((x & 0x0F) << 4 | (x & 0xF0) >> 4));

    },/*
    *@Purpose : check the Number N and then recursively ask true/false if the number is between a high and low value

    *@Parameter   : left,right
    *@Description : takes a command-line argument N, asks you to think of a number between 0 and N-1, where N = 2^n, and always guesses the answer with n questions.

    * */

    findnumber(left, right) {// calculating middle value 

        var middle = Math.floor((right + left) / 2);

        if (left < right) {

            if (left == right - 1) {

                var num = readline.question("your number is " + left);

                if (num == "y") {
                    return left;
                }

                if (num == "n") {
                    return right;
                }

            }
            // number varaible is defing that you number is in range between
            var number = readline.question("your number is in the range of " + middle + " to " + right + " ");
            // loop contains if your number is in between it will assigned to middle  else it will goes to else loop
            if (number == "y") {
                middle = this.findnumber(middle + 1, right);
            }
            else if (number == "n") {
                middle = this.findnumber(left, middle - 1);
            }
        }
        return middle;
    }

}

