import { Select } from '../../../../atoms';
import { ReactElement, forwardRef } from 'react';
import { Fieldset } from '../../fieldset';
import { TFieldSelect } from './type';

export const FieldSelect = forwardRef<HTMLSelectElement, TFieldSelect>(
  ({ size, ref: r, ...props }, ref): ReactElement => {
    return (
      <Fieldset size={size} {...props}>
        <Select {...props} ref={ref} size={size} />
      </Fieldset>
    );
  }
);

FieldSelect.displayName = 'FieldSelect';
