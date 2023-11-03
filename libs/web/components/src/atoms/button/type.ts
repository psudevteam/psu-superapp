import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type TButton = DetailedHTMLProps<
  HTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant?: 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
};
