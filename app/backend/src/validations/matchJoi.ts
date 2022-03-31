import * as Joi from 'joi';

const newMatch = Joi.object({
  homeTeam: Joi.number().positive().required().messages({
    'number.base': 'Home Team must be a positive integer',
    'number.positive': 'Home Team must be a positive integer',
    'any.required': 'Home Team must be provided',
  }),
  awayTeam: Joi.number().positive().required().messages({
    'number.base': 'Away Team must be a positive integer',
    'number.positive': 'Away Team must be a positive integer',
    'any.required': 'Away Team must be provided',
  }),
  homeTeamGoals: Joi.number().integer().min(0).required()
    .messages({
      'number.base': 'Home Team Goals must be an integer',
      'number.min': 'Home Team Goals can not be negative',
      'any.required': 'Home Team Goals must be provided',
    }),
  awayTeamGoals: Joi.number().integer().min(0).required()
    .messages({
      'number.base': 'Away Team Goals must be an integer',
      'number.min': 'Away Team Goals can not be negative',
      'any.required': 'Away Team Goals must be provided',
    }),
  inProgress: Joi.boolean().valid(true).required().messages({
    'any.required': 'In Progress must be provided as true',
    'any.only': 'In Progress must be provided as true',
  }),
});

export default newMatch;
