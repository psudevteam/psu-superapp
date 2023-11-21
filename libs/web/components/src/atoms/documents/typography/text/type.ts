import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type TText = DetailedHTMLProps<
  HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
> & {
  color?: 'green' | 'yellow' | 'red' | 'blue' | 'gray' | string;
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  bold?: boolean;
  italic?: boolean;
};
