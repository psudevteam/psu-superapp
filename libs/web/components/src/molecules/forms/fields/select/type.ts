import { TCommonForm, TSelect } from '@psu-superapp/entities';

export type TFieldSelect = TSelect & Omit<TCommonForm, 'text'>;
