import { FC, ReactElement } from 'react';
import { TMessage } from './type';

export const Message: FC<TMessage> = (props): ReactElement => {
  return <span {...props}>{props.children}</span>;
};
