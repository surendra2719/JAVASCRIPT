var readline = require('readline-sync');

module.exports = {
    isPrime(number) {
        if (number == 0 || number == 1) {
            return false;
        }
        for (let index = 2; index < number; index++) {
            if (number % index == 0) {
                return false;
            }
    
        }
        return true;
    },
    isAnagram(string1, string2) 
    {
        string1=string1+"";
       string2=string2+"";
          
          if (string1.length != string2.length) 
          {
              return false;
          }
          var arr = [];

          for (let index = 0; index < 36; index++) 
          {
              arr[index] = 0;
  
          }
          for (let index = 0; index < string1.length; index++)
           {
              var ch = string1.charAt(index);
              if (ch >= 'a' && ch <= 'z')
               {
                  var code = ch.charCodeAt(0);
  
                  arr[code - 97]++;
              } else if (ch >= 'A' && ch <= 'Z')
               {
                  var code = ch.charCodeAt(0);  
                  arr[code - 65]++;
              } else 
              {
                  var code = ch.charCodeAt(0);
                  arr[code - 22]++;
              }
              ch = string2.charAt(index);
              if (ch >= 'a' && ch <= 'z')
               {
                  var code = ch.charCodeAt(0);
  
                  arr[code - 97]--;
              } else if (ch >= 'A' && ch <= 'Z') 
              {
                  var code = ch.charCodeAt(0);
                  arr[code - 65]--;
              } else
               {
                  var code = ch.charCodeAt(0);
                  arr[code - 22]--;
              }
  
  
          }
          for (let index = 0; index < 36; index++) 
          {
              if (arr[index] != 0) 
              {
                  return false;
              }
          }
          return true;
  }
  
}