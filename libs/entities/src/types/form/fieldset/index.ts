import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { TCommonForm } from '../common';

export type TOption<T = string | number> = {
  label: string;
  value: T;
};

export type TFieldSet = Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  'size'
> &
  TCommonForm;
