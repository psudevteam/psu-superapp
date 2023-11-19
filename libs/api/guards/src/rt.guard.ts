import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
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
    jwt.verify(refresh_token, refreshSecret, async (error, decoded) => {
      if (error) {
        return res.status(401).json({ message: 'Token tidak valid' });
      } else {
        next();
      }
    });
  } catch (error) {
    console.error('something wrong with auth middleware');
    res.status(500).json({ message: 'Server Error' });
  }
};
