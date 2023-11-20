import { TCommonForm, TInput } from '@psu-superapp/entities';

export type TFieldDatepicker = Omit<TInput, 'type'> & Omit<TCommonForm, 'text'>;
