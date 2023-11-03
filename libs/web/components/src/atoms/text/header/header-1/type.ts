import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type THeader = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
> & {
  variant?: 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
};
