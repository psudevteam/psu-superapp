import {
  TLoginRequest,
  TLoginResponse,
  TMetaErrorResponse,
} from '@psu-superapp/entities';
import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { loginRequest } from './api';

export const useLoginRequest = (): UseMutationResult<
  TLoginResponse,
  TMetaErrorResponse,
  TLoginRequest,
  unknown
> =>
  useMutation({
    mutationKey: ['login-request'],
    mutationFn: async (payload) => await loginRequest(payload),
  });
