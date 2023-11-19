import { TGenerateToken, TGenerateTokenResponse } from '@psu-superapp/entities';
import * as jwt from 'jsonwebtoken';

const refreshSecret: string = process.env['REFRESH_SECRET'] || '';
const accessSecret: string = process.env['ACCESS_SECRET'] || '';
export const generateAccessToken = async (
  payload: TGenerateToken
): Promise<string> => {
  const { sub, email } = payload;
  const access_token = await jwt.sign({ sub, email }, accessSecret, {
    expiresIn: '15m',
  });

  return access_token;
};

export const generateToken = async (
  payload: TGenerateToken
): Promise<TGenerateTokenResponse> => {
  const { sub, email } = payload;
  const [access_token, refresh_token] = await Promise.all([
    generateAccessToken(payload),
    jwt.sign({ sub, email }, refreshSecret, {
      expiresIn: '1h',
    }),
  ]);

  return {
    access_token: String(access_token),
    refresh_token: String(refresh_token),
  };
};
