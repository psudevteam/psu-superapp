import { ReactElement, forwardRef } from 'react';
import { TText } from './type';
import { clsx } from 'clsx';

export const Text = forwardRef<HTMLSpanElement, TText>(
  (props, ref): ReactElement => {
    const className = clsx(
      'font-normal text-black',
      {
        'font-bold': props.bold,
        'font-italic': props.italic,
      },
      {
        'text-red-400': props.color === 'red',
        'text-green-400': props.color === 'green',
        'text-yellow-400': props.color === 'yellow',
      },
      {
        'text-xs': props.size === 1,
        'text-sm': props.size === 2,
        'text-base': props.size === 3,
        'text-lg': props.size === 4,
        'text-xl': props.size === 5,
        'text-2xl': props.size === 6,
        'text-3xl': props.size === 7,
        'text-4xl': props.size === 8,
        'text-5xl': props.size === 9,
      }
    );
    return (
      <span ref={ref} {...props} className={className}>
        {props.children}
      </span>
    );
  }
);
