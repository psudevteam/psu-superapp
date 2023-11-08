import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type TLabel = DetailedHTMLProps<
  HTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
> & {
  required?: boolean;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
};
