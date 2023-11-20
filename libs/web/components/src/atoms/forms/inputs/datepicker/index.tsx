import { forwardRef, ReactElement } from 'react';
import { inputClassName } from '@psu-superapp/web-utils';
import { TInputDatepicker } from './type';

export const InputDatepicker = forwardRef<HTMLInputElement, TInputDatepicker>(
  ({ size, ...props }, ref): ReactElement => {
    return (
      <input
        {...props}
        type="date"
        data-testid="input-date"
        className={inputClassName({ size, ...props })}
        ref={ref}
        id={props.name}
      />
    );
  }
);

InputDatepicker.displayName = 'InputDatepicker';
