import { TCommonForm, TInput } from '@psu-superapp/entities';

export type TFieldText = TInput & Omit<TCommonForm, 'text'>;
