const Joi = require('joi');
const { ValidationError } = require('../errors/errors');

const randomGeneratorContructorSchema = Joi.object({
  max: Joi.number().integer().max(Number.MAX_SAFE_INTEGER).required(),
  min: Joi.number().integer().min(Number.MIN_SAFE_INTEGER).required(),
})

const validateMinMaxSchema = Joi.object({
  max: Joi.number().integer().max(Number.MAX_SAFE_INTEGER).required(),
  min: Joi.number().integer().min(Number.MIN_SAFE_INTEGER).required(),
})

module.exports.validateRandomGeneratorContructor = (params) => {
  const validation = randomGeneratorContructorSchema.validate(params)

  if (validation.error) {
    throw new ValidationError(validation.error);
  }
}


module.exports.validateMinMax = (params) => {
  const validation = validateMinMaxSchema.validate(params)

  if (validation.error) {
    throw new ValidationError(validation.error);
  }
}
