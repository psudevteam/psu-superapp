import { TSelect } from '@psu-superapp/entities';
import { ReactElement, forwardRef } from 'react';
import { inputClassName } from '@psu-superapp/web-utils';

export const Select = forwardRef<HTMLSelectElement, TSelect>(
  ({ size, ...props }, ref): ReactElement => {
    return (
      <select
        {...props}
        className={inputClassName({ size, ...props })}
        ref={ref}
      >
        {props.options?.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  }
);
