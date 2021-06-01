const Customer = require('../models/customers.model');
module.exports = class CustomerRepository {

    static async searchCustomers({ startDate, endDate }) {
        let options ={
            "createdAt": {
                "$gte": Number(startDate),
                "$lte": Number(endDate)
            }
        }
        try {
            return await Customer.find(options)
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}