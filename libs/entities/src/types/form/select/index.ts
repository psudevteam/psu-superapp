import { DetailedHTMLProps, SelectHTMLAttributes } from 'react';
import { TCommonForm, TOption } from '..';

export type TSelect = Omit<
  DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>,
  'size'
> &
  TCommonForm & { options: Array<TOption> };
