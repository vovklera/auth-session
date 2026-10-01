import { Router } from 'express';
import { celebrate } from 'celebrate';

import {
  registerUserShema,
  loginUserShema,
} from '../validations/authValidations.js';

import {
  requestResetEmailSchema,
  requestResetPasswordSchema,
} from '../validations/resetPassValidations.js';

import {
  registerUser,
  loginUser,
  logoutUser,
  refreshUserSession,
} from '../controller.js/authController.js';

import {
  requestResetEmail,
  resetPassword,
} from '../controller.js/resetPassController.js';

const route = Router();

route.post('/auth/register', celebrate(registerUserShema), registerUser);
route.post('/auth/login', celebrate(loginUserShema), loginUser);
route.post('/auth/logout', logoutUser);

route.post('/auth/refresh', refreshUserSession);

route.post(
  '/auth/request-reset-email',
  celebrate(requestResetEmailSchema),
  requestResetEmail,
);
route.post(
  '/auth/reset-password',
  celebrate(requestResetPasswordSchema),
  resetPassword,
);

export default route;
