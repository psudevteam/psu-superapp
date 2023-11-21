import { FieldValues, useController } from 'react-hook-form';
import { FieldText } from '../../../../molecules';
import { TControlledTextField } from './type';

export const ControlledFieldText = <T extends FieldValues>({
  ref,
  ...props
}: TControlledTextField<T>) => {
  const { field } = useController(props);
  return <FieldText {...{ ...props, ...field }} />;
};
