import { TCommonForm, TInput } from '@psu-superapp/entities';

export type TFieldRadio = Omit<TInput, 'size' | 'type'> &
  Omit<TCommonForm, 'preppend' | 'append'>;
