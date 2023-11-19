import { JwtPayload } from 'jsonwebtoken';
import { Request } from 'express';

export type TRegisterRequest = TLoginRequest & {
  fullname: string;
};

export type TRegisterResponse = {
  message: string;
};

export type TLoginRequest = {
  email: string;
  password: string;
};

export type TLoginResponse = {
  email: string;
  fullname: string;
  token: {
    access_token: string;
    refresh_token: string;
  };
};

export type TRefreshTokenRequest = {
  refresh_token: string;
};

export type TRefreshTokenResponse = {
  access_token: string;
};

export type TGenerateToken = {
  email: string;
  sub: string;
};

export type TGenerateTokenResponse = {
  access_token: string;
  refresh_token: string;
};

export interface TCustomRequest extends Request {
  user: string | JwtPayload;
}
