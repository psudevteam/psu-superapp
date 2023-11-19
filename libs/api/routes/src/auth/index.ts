import { Router } from 'express';
import {
  registerContoller,
  loginController,
  refreshController,
} from '@psu-superapp/api-controllers';
import { validation, verifyRefreshToken } from '@psu-superapp/api/middlewares';
import { VSLogin, VSRefresh, VSRegister } from '@psu-superapp/entities';
export const auth = Router();

auth.post('/register', validation(VSRegister), registerContoller);

auth.post('/login', validation(VSLogin), loginController);

auth.post(
  '/refresh',
  validation(VSRefresh),
  verifyRefreshToken,
  refreshController
);
