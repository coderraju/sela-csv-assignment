const CustomerRepository = require('../repositories/customers.repository');
const utils=require('../utils/util')
const json2csv = require('json2csv').parse;
const csv=require('csvtojson');


module.exports = class CustomerController {

    static async searchCustomers(req, res) {

        try {
            let customers = await CustomerRepository.searchCustomers(req.query);
             let resp=await utils.getCsv(customers);
             res.status(200);
             return res.send({
                 success:true,
                 download_url:'127.0.0.1:3000/api/v1/csv/download'
             });

        } catch (error) {
            console.error(error);
            res.status(500);
            res.send(error);
        }
    }

    static async downloadCsv(req,res){

        const filePath=process.cwd()+ '/response.csv';
        const jsonCustomers=await csv().fromFile(filePath);
        const csvData = json2csv(jsonCustomers);
        res.setHeader('Content-disposition', 'attachment; filename=customers.csv');
        res.set('Content-Type', 'text/csv');
        res.status(200).end(csvData);

    }
}

