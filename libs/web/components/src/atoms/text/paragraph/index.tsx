import { FC, ReactElement } from 'react';
import { TParagraph } from './type';

export const Paragraph: FC<TParagraph> = (props): ReactElement => {
  return <p {...props}>{props.children}</p>;
};
