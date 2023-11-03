import { FC, ReactElement } from 'react';
import { THeader } from '../type';

export const Header1: FC<THeader> = (props): ReactElement => {
  return <h1 {...props}>{props.children}</h1>;
};
