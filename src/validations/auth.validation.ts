import { Joi } from "express-validation";

export const loginValidation = {
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
};

export const registerValidation = {
  body: Joi.object().keys({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
};
