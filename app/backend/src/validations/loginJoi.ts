import * as Joi from 'joi';

const FIELD_REQUIRED = 'All fields must be filled';

const loginJoi = Joi.object({
  email: Joi.string().required().messages({
    'string.base': '"email" must be a string',
    'any.required': FIELD_REQUIRED,
    'string.empty': FIELD_REQUIRED,
  }),
  password: Joi.string().min(6).required().messages({
    'string.min': '"password" must be a number larger than or equal to 6',
    'string.base': '"password" must be a number larger than or equal to 6',
    'any.required': FIELD_REQUIRED,
    'string.empty': FIELD_REQUIRED,
  }),
});

export default loginJoi;
