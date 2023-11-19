import { Request, Response } from 'express';
import {
  loginService,
  registerService,
  refreshService,
} from '@psu-superapp/api-services';
import { TCustomRequest, TGenerateToken } from '@psu-superapp/entities';
export const registerContoller = async (req: Request, res: Response) => {
  const { statusCode, response } = await registerService(req.body);
  return res.status(statusCode).send({ ...response });
};

export const loginController = async (req: Request, res: Response) => {
  const { statusCode, response } = await loginService(req.body);
  return res.status(statusCode).json({ ...response });
};

export const refreshController = async (req: TCustomRequest, res: Response) => {
  const { statusCode, response } = await refreshService(
    req?.user as TGenerateToken
  );
  return res.status(statusCode).json({ ...response });
};
