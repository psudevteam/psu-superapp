import { TCommonForm, TInput } from '@psu-superapp/entities';

export type TFieldCheckbox = Omit<TInput, 'size' | 'type'> &
  Omit<TCommonForm, 'preppend' | 'append'>;
