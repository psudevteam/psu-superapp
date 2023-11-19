import { Router } from 'express';
import {
  registerContoller,
  loginController,
  refreshController,
} from '@psu-superapp/api-controllers';
import { verifyRefreshToken } from '@psu-superapp/api/guards';
export const auth = Router();

auth.post('/register', registerContoller);

auth.post('/login', loginController);

auth.post('/refresh', verifyRefreshToken, refreshController);
