import { InputDatepicker } from '../../../../atoms';
import { ReactElement, forwardRef } from 'react';
import { Fieldset } from '../../fieldset';
import { TFieldDatepicker } from './type';

export const FieldDatepicker = forwardRef<HTMLInputElement, TFieldDatepicker>(
  ({ size, ...props }, ref): ReactElement => {
    return (
      <Fieldset size={size} {...props}>
        <InputDatepicker {...props} ref={ref} size={size} />
      </Fieldset>
    );
  }
);

FieldDatepicker.displayName = 'FieldDatepicker';
