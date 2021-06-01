
const mongoose = require('mongoose');
/**
 * customer model schema.
 */
const customerSchema = new mongoose.Schema({
    customerId: { type: String },
    invoiceId: { type: String },
    createdAt: { type: Number }
}
);
module.exports = mongoose.model('customers', customerSchema);