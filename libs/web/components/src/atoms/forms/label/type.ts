import { DetailedHTMLProps, LabelHTMLAttributes } from 'react';

export type TLabel = DetailedHTMLProps<
  LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
> & {
  required?: boolean;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
};
