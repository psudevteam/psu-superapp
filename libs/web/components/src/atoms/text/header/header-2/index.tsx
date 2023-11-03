import { FC, ReactElement } from 'react';
import { THeader } from '../type';

export const Header2: FC<THeader> = (props): ReactElement => {
  return <h2 {...props}>{props.children}</h2>;
};
