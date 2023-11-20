import { TFieldText } from '../../../../molecules/forms/fields/text/type';
import { FieldValues, UseControllerProps } from 'react-hook-form';

export type TControlledTextField<T extends FieldValues> =
  UseControllerProps<T> & TFieldText;
