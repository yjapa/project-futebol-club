import * as Joi from 'joi';

const POSITIVE_INTEGER = 'Home Team must be a positive integer';
const PROVIDED = 'Must be provided';

const newMatch = Joi.object({
  homeTeam: Joi.number().positive().required().messages({
    'number.base': POSITIVE_INTEGER,
    'number.positive': POSITIVE_INTEGER,
    'any.required': PROVIDED,
  }),
  awayTeam: Joi.number().positive().required().messages({
    'number.base': POSITIVE_INTEGER,
    'number.positive': POSITIVE_INTEGER,
    'any.required': PROVIDED,
  }),
  homeTeamGoals: Joi.number().integer().min(0).required()
    .messages({
      'number.base': 'Must be an integer',
      'number.min': 'Can not be negative',
      'any.required': PROVIDED,
    }),
  awayTeamGoals: Joi.number().integer().min(0).required()
    .messages({
      'number.base': 'Must be an integer',
      'number.min': 'Can not be negative',
      'any.required': 'Must be provided',
    }),
  inProgress: Joi.boolean().valid(true).required().messages({
    'any.required': 'In Progress must be provided as true',
    'any.only': 'In Progress must be provided as true',
  }),
});

export default newMatch;
