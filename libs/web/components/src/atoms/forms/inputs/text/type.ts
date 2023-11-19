import { TCommonForm, TInput } from '@psu-superapp/entities';

export type TInputText = Omit<TInput, 'size'> &
  Pick<TCommonForm, 'size' | 'status'>;
