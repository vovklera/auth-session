import { Joi, Segments } from 'celebrate';

export const registerUserShema = {
  [Segments.BODY]: Joi.object({
    name: Joi.string().min(2).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
  }),
};
