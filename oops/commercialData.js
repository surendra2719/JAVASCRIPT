var utility=require('../oops/utilityForOoops');
var filestream=require('fs');
var content=filestream.readFileSync('../oops/JSONfiles/company.json');
var content1=filestream.readFileSync('../oops/JSONfiles/customer.json');
var content2=filestream.readFileSync('../oops/JSONfiles/transaction.json');
var data=JSON.parse(content);
var data1=JSON.parse(content1);
var data2=JSON.parse(content2);
function commericical()
{

   utility.commercial(data,data1,data2);
}
commericical()