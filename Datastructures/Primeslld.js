/*****************************************************************************************
 *purpose   : Print the Anagrams in the Reverse Order. Note no Collection Library can be used.


 
 * @file    : Primeslld.js
 * @overview: Add the Prime Numbers that are Anagram in the Range of 0 - 1000 in a Stack using the Linked List 
              and Print the Anagrams in the Reverse Order
 * @version : 1.0
 * @since   : 04/01/2019 
 ***************************************************************************/

// accessing the utility class  from utilityforprogram through require keyword
var utility=require('../Datastructures/Utilityforprogram');

// accessing the stacked linked list through require keyword
var access=require('../Datastructures/Stacklinkedlist');

// accessing for printing through take varaible
var take=require('util');

// method for reverse anagram
function reverseAnagram()
{  


  var array=[];

  // declaring an empty array varaible


  for(let i=0;i<100;i++)


  // generating for loop for printing prime numbers


  {
      if(utility.isPrime(i))

      // checking that generated prime numbers with isPrime method through if condition 
      {

        // adding that generated elements into  array through pushing method from linked list
        array.push(i);
      }
  }
  
  
  var k=0;

  // declarind k varaible
  var stack=new access.StackLinkedList;

  // accessing the stack linked list
  for(let i=0;i<array.length;i++)

  // loop for printing range
  {
      for(let j=0;j<array.length;j++)
      // loop for printing generated elements
      {

        // checking that generated elements are anagram or not by isAnagram method from stacklinkedlilst throug if conditioj
          if(utility.isAnagram(array[i],array[j]))
          {
              // pushing that generated elements in array
              stack.push(array[i]);
              stack.push(array[j]);
            
              k++;
          }
      }
  }
  
  console.log("the numbers which are prime and anagram");

  // method for dispalying anagrams
    sactk.displayAnagram();
     // checking that index value through k varaible and poping that index value from 
    for(let i=0;i<2*k;i++)
    {


        
        take.print(stack.pop(i));


    }

    
  console.log('\n');
}
reverseAnagram();