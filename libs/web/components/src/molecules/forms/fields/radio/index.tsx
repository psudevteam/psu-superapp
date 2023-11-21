import { InputRadio } from '../../../../atoms';
import { ReactElement, forwardRef } from 'react';
import { Fieldset } from '../..';
import { TFieldRadio } from './type';

export const FieldRadio = forwardRef<HTMLInputElement, TFieldRadio>(
  (props, ref): ReactElement => {
    return (
      <Fieldset type="checkbox" {...props}>
        <InputRadio {...props} ref={ref} />
      </Fieldset>
    );
  }
);

FieldRadio.displayName = 'FieldRadio';
