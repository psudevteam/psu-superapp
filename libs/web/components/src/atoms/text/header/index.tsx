import { FC, ReactElement } from 'react';
import { THeader } from './type';

export const Header: FC<THeader> = (props): ReactElement => {
  return <h1 className="text-3xl font-bold">{props.children}</h1>;
};
