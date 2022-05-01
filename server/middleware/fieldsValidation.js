const Joi = require("joi");

module.exports = {
  registerValidation: (req, res, next) => {
    const schema = Joi.object({
      email: Joi.string().email().min(6).max(255).required(),
      login: Joi.string().trim().min(6).max(255).required(),
      realname: Joi.string().trim().min(6).max(255).required(),
      password: Joi.string().trim().min(6).max(255).required(),
      birthdate: Joi.number().greater(1900).less(2018).required(),
    });

    const validationResult = schema.validate(req.body);
    if (validationResult.error) {
      return res.status(400).json({ status: validationResult.error.details });
    }
    next();
  },

  logInValidation: (req, res, next) => {
    const schema = Joi.object({
      email: Joi.string().trim().min(6).max(255).required(),
      password: Joi.string().trim().min(6).max(255).required(),
    });

    const validationResult = schema.validate(req.body);
    if (validationResult.error) {
      return res.status(400).json({ status: validationResult.error.details });
    }
    next();
  },
};
