import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type TButton = DetailedHTMLProps<
  HTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant?:
    | 'success'
    | 'warning'
    | 'error'
    | 'cancel'
    | 'primary'
    | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  loading?: 'true' | 'false';
};
