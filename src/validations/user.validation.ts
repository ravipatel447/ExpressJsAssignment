import { Joi } from "express-validation";

export const updateValidation: Object = {
  body: Joi.object().keys({
    firstName: Joi.string(),
    lastName: Joi.string(),
    password: Joi.string(),
  }),
};
