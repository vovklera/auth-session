import { Router } from 'express';
import { celebrate } from 'celebrate';

import {
  registerUserShema,
  loginUserShema,
} from '../validations/authValidations.js';
import { registerUser, loginUser } from '../controller.js/authController.js';

const route = Router();

route.post('/auth/register', celebrate(registerUserShema), registerUser);
route.post('/auth/login', celebrate(loginUserShema), loginUser);

export default route;
