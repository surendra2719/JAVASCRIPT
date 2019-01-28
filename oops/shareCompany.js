
/*************************************************************************************************
 *  @Purpose        : Maintain the List of CompanyShares in a Linked List So new CompanyShares can  
                      be added or removed easily.    
 *  @file           : shareCompany.js
 *  @overview       : In this we have to add,delete and display the list of companyShares.
 *  @author         : surendra
 *  @version        : 1.0
 *  @since          : 04-01-2019
 ***************************************************************************************************/
const linked = require('../Datastructures/stockLinkedList');
var list = new linked.linkedList;
var fs = require('fs');
var read = require('readline-sync');
var element = fs.readFileSync('/home/bridgelabz/surendra/oops/JSONfiles/companyShare.json');
var companyData = JSON.parse(element);
for (var key in companyData.company) {
    list.add(companyData.company[key]);
}
function Stocklinkedlist() {
    console.log('\n1.Add Data \n2.Remove Data \n3.Save \n4.Display \n5.Exit');
    /*
    * enter choices to select 
    */
    var choice = read.question('Enter your choice :');
    /**
     * This choice Add the data into the file
     */
    if (choice == 1) {
        var name = read.question('Enter company name :');
        var PerShare = read.question('Enter per share price :');
        var total = read.question('Enter total number of shares :');
        var v = {
            symbol: name,
            pricePerShare: PerShare,
            totalShare: total
        }
        list.add(v);
        console.log('Company added successfully');
        Stocklinkedlist();
    }
    /**
     * This remove Add the data into the file
     */
    else if (choice == 2) {
        var array = [];
        array = list.printList1();
        console.log(array);
        var curr = list.head;
        var deleteCompany = read.question('Enter the company you want to delete :');
        let n = 0;
        var flag = true;
        while (curr && flag) {
            n++;
            if (curr.data.symbol === deleteCompany) {
                console.log('curr :', curr.data.symbol);
                list.popIndex(n);
                flag = false;
            }
            curr = curr.next;
        }
        if (flag) {
            console.log('Index not found');
        }
        console.log('UPDATED LIST');
        var array = [];
        array = list.printList1();
        console.log(array);
        Stocklinkedlist();
    }
    /**
     * This choice save the data and data is stored into the file
     */
    else if (choice == 3) {
        var outputarray = [];
        outputarray = list.printList1();
        console.log('Output Array is :');
        console.log(outputarray);
        var b = { "company": outputarray }
        fs.writeFileSync('/home/bridgelabz/surendra/oops/JSONfiles/companyShare.json', JSON.stringify(b), 'utf-8', function () {
            console.log('done')
        });
        console.log('Data saved to file');
        Stocklinkedlist();
    }
    /**
     * This choice display the data in file
     */
    else if (choice == 4) {
        var array = [];
        array = list.printList1();
        console.log(array);
        Stocklinkedlist();
    }
    /**
     * This choice will exit from operation
     */
    else if (choice == 5) {
        console.log("Thank You!");
        process.exit();
    }
    else {
        console.log('Invalid choice ..Try Again.');
        Stocklinkedlist();
    }
}
Stocklinkedlist();
