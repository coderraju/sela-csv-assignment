const Joi = require('joi');

module.exports = class validateCustomers{

  static async searchCustomers (req, res, next)  {
    const searchCustomers = Joi.object().keys({
      startDate: Joi.string().required(),
      endDate: Joi.string().required(),
    })
    try {
       await searchCustomers.validateAsync(req.query);
       next();
    } catch (e) {
      res.status(400);
      return res.send({
        status: "failure",
        reason: e.message
      });
    }
  }
}




