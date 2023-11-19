import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { TCustomRequest, TGenerateToken } from '@psu-superapp/entities';

const refreshSecret: string = process.env['REFRESH_SECRET'] || '';

export const verifyRefreshToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { refresh_token } = req.body;
    if (!refresh_token) {
      return res.status(401).json({
        message: 'Invalid refresh token',
      });
    }
    const decoded = jwt.verify(refresh_token, refreshSecret);
    (req as TCustomRequest).user = decoded;

    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
