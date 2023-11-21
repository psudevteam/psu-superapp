import { TOption } from '@psu-superapp/entities';
import { TFieldRadio } from '../radio/type';

export type TFieldRadioGroup = TFieldRadio & { options?: Array<TOption> };
