var express = require('express');
var router = express.Router();
const customersController=require('../controllers/customers.controller');
const validateCustomers=require('../validations/customers.validation');
router.post('/api/v1/search',validateCustomers.searchCustomers,customersController.searchCustomers);
router.get('/api/v1/csv/download',customersController.downloadCsv)
module.exports = router;