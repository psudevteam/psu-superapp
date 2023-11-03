import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type TLabel = DetailedHTMLProps<
  HTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
> & {
  variant?: 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
};
