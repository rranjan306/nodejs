'use strict';

import Joi from 'joi';

const MoviewarehouseSchema = {
  name: Joi.string().min(1).max(50).required(),
  username: Joi.string().alphanum().min(3).max(10).required(),
  password: Joi.string().min(3).max(500),
  email: Joi.string().email({minDomainAtoms: 2}).required(),
  phone: Joi.string().min(1).max(10).required()
};

export default MoviewarehouseSchema;
