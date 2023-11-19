import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type TParagraph = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
> & {
  variant?: 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
};
