import { Router } from 'express';
import {
  registerContoller,
  loginController,
  refreshController,
} from '@psu-superapp/api-controllers';
export const auth = Router();

auth.post('/register', registerContoller);

auth.post('/login', loginController);

auth.post('/refresh', refreshController);
