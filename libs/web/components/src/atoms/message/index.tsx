import { FC, ReactElement } from 'react';
import { TMessage } from './type';
import { clsx } from 'clsx';

export const Message: FC<TMessage> = (props): ReactElement => {
  const { status = 'none' } = props;

  const className = clsx('text-xs flex items-center gap-x-1 mt-[-7px]', {
    'text-red-400': status === 'error',
    'text-green-400': status === 'success',
    'text-gray-400': status === 'none',
    'text-yellow-400': status === 'warning',
  });

  return (
    <span className={className} {...props}>
      {props.children}
    </span>
  );
};
