import { FC, ReactElement } from 'react';
import { TButton } from './type';

export const Button: FC<TButton> = (props): ReactElement => {
  return <button {...props}>{props.children}</button>;
};
