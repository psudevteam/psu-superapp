import { TCommonForm, TInput } from '@psu-superapp/entities';

export type TInputDatepicker = Omit<TInput, 'size' | 'type'> &
  Pick<TCommonForm, 'size' | 'status'>;
