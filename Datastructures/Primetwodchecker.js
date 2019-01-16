var utility = require('../Datastructures/Primeutility');
var req = require('util');
module.exports = {
      PrimeNumber2D() 
    {
        var array = [["[0-100  ], ["], ["[100-200], [ "], ["[200-300], [ "], ["[300-400], [ "], ["[400-500], ["], ["[500-600], ["], ["[600-700], ["], ["[700-800], [ "], ["[800-900], ["], ["[900-1000], ["]];
        var i = 0; var j = 1; var range = 100;
        for (let prime = 2; prime <= 1000; prime++) {
            if (utility.isPrime(prime)) {
                if (prime <= range) {
                    array[i][j] = prime;
                    j++;
                }
                else {
                    j = 1;
                    range = range + 100;
                    i++;
                   // array[i][j] = prime;
                }
            }
        }
        console.log("The prime numbers are presents in the given range :\n");
       
        for (var i = 0; i < array.length; i++) 
            {
                req.print("[")
            for (var j = 0; j < array[i].length; j++) {
              
                  req.print(array[i][j]+" ");
            }

            console.log("]]");
        }
        console.log();
    }

}