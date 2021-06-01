


const fs=require('fs');
const CsvParser =require('json2csv').Parser;

const getCsv=async (customers)=>{

let formData=[];
customers.forEach((obj) => {
   const {createdAt, customerId, invoiceId } = obj;
   formData.push({createdAt, customerId, invoiceId });
 });

const csvFields = ["CreatedAt", "CustomerId", "InvoiceId"];
const csvParser = new CsvParser({ csvFields });
const csvData = csvParser.parse(formData);
const path=__dirname;
fs.writeFile('response.csv', csvData, function(err,res) {
   if (err) throw err;
});
return process.cwd()+'/response.csv';

}
 module.exports={getCsv};
