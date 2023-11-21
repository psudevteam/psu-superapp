import { InputRadio, Label } from '../../../../atoms';
import { Fieldset } from '../..';
import { ReactElement, forwardRef } from 'react';
import { TFieldRadioGroup } from './type';

export const FieldRadioGroup = forwardRef<HTMLInputElement, TFieldRadioGroup>(
  (props, ref): ReactElement => {
    return (
      <Fieldset type="radio" {...props}>
        {props.options?.map((option, key) => (
          <div className="flex gap-x-2" key={key}>
            <InputRadio key={key} value={option.value} {...props} ref={ref} />
            <Label size={props.size} className="text-gray-400 font-medium">
              {option.label}
            </Label>
          </div>
        ))}
      </Fieldset>
    );
  }
);

FieldRadioGroup.displayName = 'FieldRadioGroup';
