import { Router } from 'express';
import { celebrate } from 'celebrate';

import { registerUserShema } from '../validations/authValidations.js';
import { registerUser } from '../controller.js/authController.js';

const route = Router();

route.post('/auth/register', celebrate(registerUserShema), registerUser);

export default route;
