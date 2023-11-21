import { TInput } from '@psu-superapp/entities';

export type TInputCheckbox = Omit<TInput, 'type' | 'size'>;
