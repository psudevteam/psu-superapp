import { TLoginRequest, TLoginResponse } from '@psu-superapp/entities';
import { api } from '@psu-superapp/web-services';

export const loginRequest = async (
  payload: TLoginRequest
): Promise<TLoginResponse> => {
  const { data } = await api.post<TLoginResponse>('/auth/login', payload);
  return data;
};
