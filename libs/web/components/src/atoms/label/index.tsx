import { FC, ReactElement } from 'react';
import { TLabel } from './type';

export const Label: FC<TLabel> = (props): ReactElement => {
  return <label {...props}>{props.children}</label>;
};
